#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# Run this script from the root dir in repo
# ------------------------------------------
# Includes the usage function:
# ./gen-usage.sh
# ------------------------------------------
USERNAME=$(id -un)
DATETIME=$(date)
SOURCE=Terms-WOT-manage.txt   # will stay in tact
INPUT=Terms-workfile.txt      # will be overridden
AWKOUT=AwkOut-workfile.txt    # will be overridden
HEADER=Header-workfile.txt    # will be overridden
OUTYAMLFILE=wot_sidebar.yml          # resulting yml file

sed '1d' "${SOURCE}" > "${INPUT}"   # remove the header from the file by creating a work file
sed -n '1p' "${SOURCE}" > "${HEADER}"   # add the header from the file by creating a work file

string=$(cat "${HEADER}")
# echo "${string//$'\n'/\\n}"

length=${#string}

if [  ${length} -gt 0 ]; then  # non-empty header string
  IFS=';' read -r -a COLS <<< "${string}"  # Colums names in an array
fi    # if length > 0


# Some guidance of the output
BASEDIR='_data/sidebars'   # Jekyll theme needs the yaml data in this dir
NAMESTRLEN=20     # We need short menu item names

# ------------------------------------------
if [ $# -lt 1 ]; then
  MENUNAME="Overview"
  CATNAME="all"
  LEVELNR="1"  # 1 is all terms will be shown in a certain categorie
fi   # lt 1

# Getopts handling or arguments handling

while [ ! -z "$1" ]; do
    case $1 in
        --name|-n)
            shift
            echo "You entered name as: $1"
            MENUNAME=$1
            ;;
        --column|-c)
            shift
            echo "You entered category as: $1"
            CATNAME=$1
            ;;
        --level|-l)
            shift
            echo "You entered level as: $1"
            LEVELNR=$1
            ;;
        *)
            show_usage
            ;;
    esac
if [ $# -gt 0 ]; then
  shift
fi
done    # while loop getopts

# Test whether LEVEL has an appropriate value
case $LEVELNR in 
  1 | 3 | 7)
    #echo "a valid level has been assigned: $LEVELNR"
    ;;
  *)
    echo "an invalid level number ($LEVELNR) has been assigned"
    exit 3
    ;;
esac

# Verifying the existence of CATNAME in COLS array and we need the 
if [[ ${CATNAME} == "all" ]]; then
  COLUMNINDEX=999  # This means "all categories relevant"
else    # looking for a matching column name
  found='false'
  for i in "${!COLS[@]}"
    do
      if [ "${COLS[$i]}" == "$CATNAME" ] ; then
      let COLUMNINDEX=$i+1     # assigns the index number to use in AWK command of the first exactly matching column, following ignored
      found='true'
      fi  # found i
    done  # for loop
  if [ "$found" == "false" ]; then 
    echo "${CATNAME} not found in ${COLS[*]}"
    exit 1
  fi # found is false, CATNAME not in COLS
fi # CATNAME == all

# Filter the relevant terms (lines in the INPUT)
#####################################
# IMPORTANT In these AWK command, I haven't been able to make the column number variable :
#           Therefore Level column is fixed $8 
#           Therefore the Cat_XXXXX columns are fixed too: $9-$16
# We strip the number of records (rows) and field (columns) according to the arguments passed
# The Workfile INPUT will be overriden in the consequetive steps

# awk 'BEGIN { FS=OFS=";" } ($8>=1 && $9>=1) { print $1, $4, $6, $8, $14 }' ${INPUT}

# Construct the string of fields
IndexArray=(1 4 6 8 $COLUMNINDEX)

for i in "${IndexArray[@]}"; do
    fields="$fields,\$$i"
done
fields=$( echo "$fields" | sed 's/^,//' ) # Remove the leading comma

if [ $COLUMNINDEX = "999" ]; then
  echo "TBW some logic here to make a loop through all categories" # some logic here to make a loop through all categories 
else
  catsel="\$$COLUMNINDEX" # We'd like to choose the right category column
  cat "${INPUT}" | awk -v levelNr=$LEVELNR 'BEGIN { FS=OFS=";" }  {if (($8 >= levelNr) && ( '$catsel' >= 1 )) print '$fields' }' > "$AWKOUT"
fi   # COLUMNINDEX



OLDIFS="$IFS"               # $IFS is a special shell variable in Bash
IFS=';'

[ ! -f $AWKOUT ] && { echo "$AWKOUT file not found"; exit 99; }
echo $FILENAME
FILENAME="./$BASEDIR/${CATNAME}_lvl${LEVELNR}_${OUTYAMLFILE}"
echo $FILENAME

# Start write to resulting yaml file
echo "# This script automatically generated this Terms menu YAML file , with arguments" > $FILENAME
echo "# menuname: ${MENUNAME}, catname: ${CATNAME} and level: ${LEVELNR}."  >> $FILENAME 
echo "# The sidebar code loops through sections here and provides the appropriate formatting." >> $FILENAME
echo "# Generated running $(basename ${0}) located in $(dirname ${0}), by UID ${USERNAME} on ${DATETIME}." >> $FILENAME
echo "" >> $FILENAME
echo "entries:" >> $FILENAME
echo "- title: sidebar" >> $FILENAME
echo "  product: Glossary KERI/ACDC" >> $FILENAME
echo "  version: 0.2" >> $FILENAME
echo "  folders:" >> $FILENAME
echo ""  >> $FILENAME
echo "  - title:" >> $FILENAME
echo "    output: pdf" >> $FILENAME
echo "    type: frontmatter" >> $FILENAME
echo "    folderitems:" >> $FILENAME
echo "    - title:" >> $FILENAME
echo "      url: /titlepage.html" >> $FILENAME
echo "      output: pdf" >> $FILENAME
echo "      type: frontmatter" >> $FILENAME
echo "    - title:" >> $FILENAME
echo "      url: /tocpage.html" >> $FILENAME
echo "      output: pdf" >> $FILENAME
echo "      type: frontmatter" >> $FILENAME
echo "" >> $FILENAME
echo "  - title: $MENUNAME" >> $FILENAME
echo "    output: web, pdf" >> $FILENAME
echo "    folderitems:" >> $FILENAME

# 1 Key - 4 Term - 6 link - 8 level - YY Cat_XXXX  
while read Key Term link level $CATNAME
do

    Term=$( echo $Term |  sed -e 's/^[[:space:]]*//' )  # remove preceding and trailing blanks
    Term=$( echo $Term | sed -e 's/[^A-Za-z0-9._-]/-/g')  # replace unwanted chars in filename
    
    if [ ${#Term} -gt $NAMESTRLEN ]; then
      Term = ${$Term:0:$NAMESTRLEN}  # shorten the Term to an acceptable menu item name
    fi  # Term too long for being menu item name
  
    echo "" >> $FILENAME
    echo "    - title: $Term" >> $FILENAME
    echo "      url: $link" >> $FILENAME
    echo "      output: web, pdf" >> $FILENAME

done < $AWKOUT
IFS="$OLDIFS"   # $IFS is a special shell variable in Bash, set it back to the old value