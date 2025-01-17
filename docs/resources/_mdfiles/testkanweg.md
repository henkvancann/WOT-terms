<body>
<table class="ears">
<thead><tr>
<td class="left">Internet-Draft</td>
<td class="center">KERI</td>
<td class="right">July 2022</td>
</tr></thead>
<tfoot><tr>
<td class="left">Smith</td>
<td class="center">Expires 17 January 2023</td>
<td class="right">[Page]</td>
</tr></tfoot>
</table>
<div id="external-metadata" class="document-information"></div>
<div id="internal-metadata" class="document-information">
<dl id="identifiers">
<dt class="label-workgroup">Workgroup:</dt>
<dd class="workgroup">TODO Working Group</dd>
<dt class="label-internet-draft">Internet-Draft:</dt>
<dd class="internet-draft">draft-ssmith-keri-latest</dd>
<dt class="label-published">Published:</dt>
<dd class="published">
<time datetime="2022-07-16" class="published">16 July 2022</time>
    </dd>
<dt class="label-intended-status">Intended Status:</dt>
<dd class="intended-status">Informational</dd>
<dt class="label-expires">Expires:</dt>
<dd class="expires"><time datetime="2023-01-17">17 January 2023</time></dd>
<dt class="label-authors">Author:</dt>
<dd class="authors">
<div class="author">
      <div class="author-name">S. Smith</div>
<div class="org">ProSapien LLC</div>
</div>
</dd>
</dl>
</div>
<h1 id="title">Key Event Receipt Infrastructure (KERI)</h1>
<section id="section-abstract">
      <h2 id="abstract"><a href="#abstract" class="selfRef">Abstract</a></h2>
<p id="section-abstract-1">An identity system-based secure overlay for the Internet is presented. This is based on a Key Event Receipt Infrastructure (KERI) or the KERI protocol <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#KERI-ID" class="xref">KERI-ID</a>]</span><span>[<a href="#RFC0791" class="xref">RFC0791</a>]</span>. This includes a primary root-of-trust in self-certifying identifiers (SCIDs) <span>[<a href="#UIT" class="xref">UIT</a>]</span><span>[<a href="#SCPK" class="xref">SCPK</a>]</span><span>[<a href="#SFS" class="xref">SFS</a>]</span><span>[<a href="#SCPN" class="xref">SCPN</a>]</span><span>[<a href="#SCURL" class="xref">SCURL</a>]</span>. It presents a formalism for Autonomic Identifiers (AIDs) and Autonomic Namespaces (ANs). They are part of an Autonomic Identity System (AIS). This system uses the design principle of minimally sufficient means to provide a candidate trust spanning layer for the internet. Associated with this system is a decentralized key management infrastructure (DKMI). The primary root-of-trust are self-certifying identifiers that are strongly bound at issuance to a cryptographic signing (public, private) keypair. These are self-contained until/unless control needs to be transferred to a new keypair. In that event, an append-only chained key-event log of signed transfer statements provides end verifiable control provenance. This makes intervening operational infrastructure replaceable because the event logs may be served up by any infrastructure including ambient infrastructure. End verifiable logs on ambient infrastructure enable ambient verifiability (verifiable by anyone, anywhere, at any time).
The primary key management operation is key rotation (transference) via a novel key pre-rotation scheme <span>[<a href="#DAD" class="xref">DAD</a>]</span><span>[<a href="#KERI" class="xref">KERI</a>]</span>. Two primary trust modalities motivated the design, these are a direct (one-to-one) mode and an indirect (one-to-any) mode. The indirect mode depends on witnessed key event receipt logs (KERL) as a secondary root-of-trust for validating events. This gives rise to the acronym KERI for key event receipt infrastructure. In the direct mode, the identity controller establishes control via verified signatures of the controlling keypair. The indirect mode extends that trust basis with witnessed key event receipt logs (KERL) for validating events. The security and accountability guarantees of indirect mode are provided by KA2CE or KERI's Agreement Algorithm for Control Establishment among a set of witnesses.
The KA2CE approach may be much more performant and scalable than more complex approaches that depend on a total ordering distributed consensus ledger. Nevertheless, KERI may employ a distributed consensus ledger when other considerations make it the best choice. The KERI approach to DKMI allows for more granular composition. Moreover, because KERI is event streamed it enables DKMI that operates in-stride with data events streaming applications such as web 3.0, IoT, and others where performance and scalability are more important. The core KERI engine is identifier namespace independent. This makes KERI a candidate for a universal portable DKMI <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#KERI-ID" class="xref">KERI-ID</a>]</span><span>[<a href="#UIT" class="xref">UIT</a>]</span>.<a href="#section-abstract-1" class="pilcrow">¶</a></p>
</section>
<section class="note rfcEditorRemove" id="section-note.1">
      <h2 id="name-discussion-venues">
<a href="#name-discussion-venues" class="section-name selfRef">Discussion Venues</a>
      </h2>
<p id="section-note.1-1">This note is to be removed before publishing as an RFC.<a href="#section-note.1-1" class="pilcrow">¶</a></p>
<p id="section-note.1-2">Source for this draft and an issue tracker can be found at
    <span><a href="https://github.com/WebOfTrust/ietf-keri">https://github.com/WebOfTrust/ietf-keri</a></span>.<a href="#section-note.1-2" class="pilcrow">¶</a></p>
</section>
<div id="status-of-memo">
<section id="section-boilerplate.1">
        <h2 id="name-status-of-this-memo">
<a href="#name-status-of-this-memo" class="section-name selfRef">Status of This Memo</a>
        </h2>
<p id="section-boilerplate.1-1">
        This Internet-Draft is submitted in full conformance with the
        provisions of BCP 78 and BCP 79.<a href="#section-boilerplate.1-1" class="pilcrow">¶</a></p>
<p id="section-boilerplate.1-2">
        Internet-Drafts are working documents of the Internet Engineering Task
        Force (IETF). Note that other groups may also distribute working
        documents as Internet-Drafts. The list of current Internet-Drafts is
        at <span><a href="https://datatracker.ietf.org/drafts/current/">https://datatracker.ietf.org/drafts/current/</a></span>.<a href="#section-boilerplate.1-2" class="pilcrow">¶</a></p>
<p id="section-boilerplate.1-3">
        Internet-Drafts are draft documents valid for a maximum of six months
        and may be updated, replaced, or obsoleted by other documents at any
        time. It is inappropriate to use Internet-Drafts as reference
        material or to cite them other than as "work in progress."<a href="#section-boilerplate.1-3" class="pilcrow">¶</a></p>
<p id="section-boilerplate.1-4">
        This Internet-Draft will expire on 17 January 2023.<a href="#section-boilerplate.1-4" class="pilcrow">¶</a></p>
</section>
</div>
<div id="copyright">
<section id="section-boilerplate.2">
        <h2 id="name-copyright-notice">
<a href="#name-copyright-notice" class="section-name selfRef">Copyright Notice</a>
        </h2>
<p id="section-boilerplate.2-1">
            Copyright (c) 2022 IETF Trust and the persons identified as the
            document authors. All rights reserved.<a href="#section-boilerplate.2-1" class="pilcrow">¶</a></p>
<p id="section-boilerplate.2-2">
            This document is subject to BCP 78 and the IETF Trust's Legal
            Provisions Relating to IETF Documents
            (<span><a href="https://trustee.ietf.org/license-info">https://trustee.ietf.org/license-info</a></span>) in effect on the date of
            publication of this document. Please review these documents
            carefully, as they describe your rights and restrictions with
            respect to this document. Code Components extracted from this
            document must include Revised BSD License text as described in
            Section 4.e of the Trust Legal Provisions and are provided without
            warranty as described in the Revised BSD License.<a href="#section-boilerplate.2-2" class="pilcrow">¶</a></p>
</section>
</div>
<div id="toc">
<section id="section-toc.1">
        <a href="#" onclick="scroll(0,0)" class="toplink">▲</a><h2 id="name-table-of-contents">
<a href="#name-table-of-contents" class="section-name selfRef">Table of Contents</a>
        </h2>
<nav class="toc"><ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1">
            <p id="section-toc.1-1.1.1"><a href="#section-1" class="xref">1</a>.  <a href="#name-introduction" class="xref">Introduction</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.1">
                <p id="section-toc.1-1.1.2.1.1" class="keepWithNext"><a href="#section-1.1" class="xref">1.1</a>.  <a href="#name-self-certifying-identifier-" class="xref">Self-Certifying IDentifier (SCID)</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.2">
                <p id="section-toc.1-1.1.2.2.1" class="keepWithNext"><a href="#section-1.2" class="xref">1.2</a>.  <a href="#name-autonomic-identifier-aid" class="xref">Autonomic IDentifier (AID)</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.3">
                <p id="section-toc.1-1.1.2.3.1" class="keepWithNext"><a href="#section-1.3" class="xref">1.3</a>.  <a href="#name-key-pre-rotation-concept" class="xref">Key Pre-rotation Concept</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.4">
                <p id="section-toc.1-1.1.2.4.1"><a href="#section-1.4" class="xref">1.4</a>.  <a href="#name-cryptographic-primitives" class="xref">Cryptographic Primitives</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.4.2.1">
                    <p id="section-toc.1-1.1.2.4.2.1.1"><a href="#section-1.4.1" class="xref">1.4.1</a>.  <a href="#name-cesr" class="xref">CESR</a></p>
</li>
                  <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.4.2.2">
                    <p id="section-toc.1-1.1.2.4.2.2.1"><a href="#section-1.4.2" class="xref">1.4.2</a>.  <a href="#name-qualified-cryptographic-pri" class="xref">Qualified Cryptographic Primitive</a></p>
</li>
                </ul>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.5">
                <p id="section-toc.1-1.1.2.5.1"><a href="#section-1.5" class="xref">1.5</a>.  <a href="#name-identifier-system-security-" class="xref">Identifier System Security Overlay</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.5.2.1">
                    <p id="section-toc.1-1.1.2.5.2.1.1"><a href="#section-1.5.1" class="xref">1.5.1</a>.  <a href="#name-security-overlay-flaws" class="xref">Security Overlay Flaws</a></p>
</li>
                  <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.1.2.5.2.2">
                    <p id="section-toc.1-1.1.2.5.2.2.1"><a href="#section-1.5.2" class="xref">1.5.2</a>.  <a href="#name-triad-bindings" class="xref">Triad Bindings</a></p>
</li>
                </ul>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.2">
            <p id="section-toc.1-1.2.1"><a href="#section-2" class="xref">2</a>.  <a href="#name-basic-terminology" class="xref">Basic Terminology</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.3">
            <p id="section-toc.1-1.3.1"><a href="#section-3" class="xref">3</a>.  <a href="#name-keypair-labeling-convention" class="xref">Keypair Labeling Convention</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4">
            <p id="section-toc.1-1.4.1"><a href="#section-4" class="xref">4</a>.  <a href="#name-pre-rotation-detail" class="xref">Pre-rotation Detail</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.1">
                <p id="section-toc.1-1.4.2.1.1"><a href="#section-4.1" class="xref">4.1</a>.  <a href="#name-inception-event-pre-rotatio" class="xref">Inception Event Pre-rotation</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.2">
                <p id="section-toc.1-1.4.2.2.1"><a href="#section-4.2" class="xref">4.2</a>.  <a href="#name-rotation-using-pre-rotation" class="xref">Rotation Using Pre-rotation</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.3">
                <p id="section-toc.1-1.4.2.3.1"><a href="#section-4.3" class="xref">4.3</a>.  <a href="#name-pre-rotation-example" class="xref">Pre-Rotation Example</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.4">
                <p id="section-toc.1-1.4.2.4.1"><a href="#section-4.4" class="xref">4.4</a>.  <a href="#name-reserve-rotation" class="xref">Reserve Rotation</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.5">
                <p id="section-toc.1-1.4.2.5.1"><a href="#section-4.5" class="xref">4.5</a>.  <a href="#name-custorial-rotation" class="xref">Custorial Rotation</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.6">
                <p id="section-toc.1-1.4.2.6.1"><a href="#section-4.6" class="xref">4.6</a>.  <a href="#name-basic-fractionally-weighted" class="xref">Basic Fractionally Weighted Threshold</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.6.2.1">
                    <p id="section-toc.1-1.4.2.6.2.1.1"><a href="#section-4.6.1" class="xref">4.6.1</a>.  <a href="#name-partial-pre-rotation-detail" class="xref">Partial Pre-rotation Detail</a></p>
</li>
                </ul>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.7">
                <p id="section-toc.1-1.4.2.7.1"><a href="#section-4.7" class="xref">4.7</a>.  <a href="#name-reserve-rotation-example" class="xref">Reserve Rotation Example</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.4.2.8">
                <p id="section-toc.1-1.4.2.8.1"><a href="#section-4.8" class="xref">4.8</a>.  <a href="#name-custodial-rotation-example" class="xref">Custodial Rotation Example</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5">
            <p id="section-toc.1-1.5.1"><a href="#section-5" class="xref">5</a>.  <a href="#name-keri-data-structures" class="xref">KERI Data Structures</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.1">
                <p id="section-toc.1-1.5.2.1.1"><a href="#section-5.1" class="xref">5.1</a>.  <a href="#name-field-labels-for-keri-data-" class="xref">Field Labels for KERI Data Structures</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.2">
                <p id="section-toc.1-1.5.2.2.1"><a href="#section-5.2" class="xref">5.2</a>.  <a href="#name-compact-labels" class="xref">Compact Labels</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.3">
                <p id="section-toc.1-1.5.2.3.1"><a href="#section-5.3" class="xref">5.3</a>.  <a href="#name-special-label-ordering-requ" class="xref">Special Label Ordering Requirements</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.4">
                <p id="section-toc.1-1.5.2.4.1"><a href="#section-5.4" class="xref">5.4</a>.  <a href="#name-version-string-field" class="xref">Version String Field</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.5">
                <p id="section-toc.1-1.5.2.5.1"><a href="#section-5.5" class="xref">5.5</a>.  <a href="#name-said-self-addressing-identi" class="xref">SAID (Self-Addressing IDentifier) Fields</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.6">
                <p id="section-toc.1-1.5.2.6.1"><a href="#section-5.6" class="xref">5.6</a>.  <a href="#name-aid-autonomic-identifier-fi" class="xref">AID (Autonomic IDentifier) Fields</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.6.2.1">
                    <p id="section-toc.1-1.5.2.6.2.1.1"><a href="#section-5.6.1" class="xref">5.6.1</a>.  <a href="#name-namespaced-aids" class="xref">Namespaced AIDs</a></p>
</li>
                </ul>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.7">
                <p id="section-toc.1-1.5.2.7.1"><a href="#section-5.7" class="xref">5.7</a>.  <a href="#name-version-string-field-2" class="xref">Version String Field</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.8">
                <p id="section-toc.1-1.5.2.8.1"><a href="#section-5.8" class="xref">5.8</a>.  <a href="#name-next-threshold-field" class="xref">Next Threshold Field</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.5.2.9">
                <p id="section-toc.1-1.5.2.9.1"><a href="#section-5.9" class="xref">5.9</a>.  <a href="#name-common-normalized-acdc-and-" class="xref">Common Normalized ACDC and KERI Labels</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6">
            <p id="section-toc.1-1.6.1"><a href="#section-6" class="xref">6</a>.  <a href="#name-seals" class="xref">Seals</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6.2.1">
                <p id="section-toc.1-1.6.2.1.1"><a href="#section-6.1" class="xref">6.1</a>.  <a href="#name-digest-seal" class="xref">Digest Seal</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6.2.2">
                <p id="section-toc.1-1.6.2.2.1"><a href="#section-6.2" class="xref">6.2</a>.  <a href="#name-merkle-tree-root-digest-sea" class="xref">Merkle Tree Root Digest Seal</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6.2.3">
                <p id="section-toc.1-1.6.2.3.1"><a href="#section-6.3" class="xref">6.3</a>.  <a href="#name-backer-seal" class="xref">Backer Seal</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6.2.4">
                <p id="section-toc.1-1.6.2.4.1"><a href="#section-6.4" class="xref">6.4</a>.  <a href="#name-event-seal" class="xref">Event Seal</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.6.2.5">
                <p id="section-toc.1-1.6.2.5.1"><a href="#section-6.5" class="xref">6.5</a>.  <a href="#name-last-establishment-event-se" class="xref">Last Establishment Event Seal</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.7">
            <p id="section-toc.1-1.7.1"><a href="#section-7" class="xref">7</a>.  <a href="#name-key-event-messages-non-dele" class="xref">Key Event Messages (Non-delegated)</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.7.2.1">
                <p id="section-toc.1-1.7.2.1.1"><a href="#section-7.1" class="xref">7.1</a>.  <a href="#name-inception-event" class="xref">Inception Event</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.7.2.2">
                <p id="section-toc.1-1.7.2.2.1"><a href="#section-7.2" class="xref">7.2</a>.  <a href="#name-inception-event-message-bod" class="xref">Inception Event Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.7.2.3">
                <p id="section-toc.1-1.7.2.3.1"><a href="#section-7.3" class="xref">7.3</a>.  <a href="#name-rotation-event-message-body" class="xref">Rotation Event Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.7.2.4">
                <p id="section-toc.1-1.7.2.4.1"><a href="#section-7.4" class="xref">7.4</a>.  <a href="#name-interaction-event-message-b" class="xref">Interaction Event Message Body</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.8">
            <p id="section-toc.1-1.8.1"><a href="#section-8" class="xref">8</a>.  <a href="#name-delegated-key-event-message" class="xref">Delegated Key Event Messages</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.8.2.1">
                <p id="section-toc.1-1.8.2.1.1"><a href="#section-8.1" class="xref">8.1</a>.  <a href="#name-delegated-inception-event-m" class="xref">Delegated Inception Event Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.8.2.2">
                <p id="section-toc.1-1.8.2.2.1"><a href="#section-8.2" class="xref">8.2</a>.  <a href="#name-delegated-rotation-event-me" class="xref">Delegated Rotation Event Message Body</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.9">
            <p id="section-toc.1-1.9.1"><a href="#section-9" class="xref">9</a>.  <a href="#name-receipt-messages" class="xref">Receipt Messages</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.9.2.1">
                <p id="section-toc.1-1.9.2.1.1"><a href="#section-9.1" class="xref">9.1</a>.  <a href="#name-non-transferable-prefix-sig" class="xref">Non-Transferable Prefix Signer Receipt Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.9.2.2">
                <p id="section-toc.1-1.9.2.2.1"><a href="#section-9.2" class="xref">9.2</a>.  <a href="#name-transferable-prefix-signer-" class="xref">Transferable Prefix Signer Receipt Message Body</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10">
            <p id="section-toc.1-1.10.1"><a href="#section-10" class="xref">10</a>. <a href="#name-other-messages" class="xref">Other Messages</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10.2.1">
                <p id="section-toc.1-1.10.2.1.1"><a href="#section-10.1" class="xref">10.1</a>.  <a href="#name-query-message-message-body" class="xref">Query Message Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10.2.2">
                <p id="section-toc.1-1.10.2.2.1"><a href="#section-10.2" class="xref">10.2</a>.  <a href="#name-reply-message-body" class="xref">Reply Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10.2.3">
                <p id="section-toc.1-1.10.2.3.1"><a href="#section-10.3" class="xref">10.3</a>.  <a href="#name-prod-message-body" class="xref">Prod Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10.2.4">
                <p id="section-toc.1-1.10.2.4.1"><a href="#section-10.4" class="xref">10.4</a>.  <a href="#name-bare-message-body" class="xref">Bare Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.10.2.5">
                <p id="section-toc.1-1.10.2.5.1"><a href="#section-10.5" class="xref">10.5</a>.  <a href="#name-exchange-message-body" class="xref">Exchange Message Body</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.11">
            <p id="section-toc.1-1.11.1"><a href="#section-11" class="xref">11</a>. <a href="#name-notices-embedded-in-reply-m" class="xref">Notices Embedded in Reply Messages</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.11.2.1">
                <p id="section-toc.1-1.11.2.1.1"><a href="#section-11.1" class="xref">11.1</a>.  <a href="#name-key-state-notice-ksn" class="xref">Key State Notice (KSN)</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.11.2.2">
                <p id="section-toc.1-1.11.2.2.1"><a href="#section-11.2" class="xref">11.2</a>.  <a href="#name-embedded-in-reply" class="xref">Embedded in Reply</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.11.2.3">
                <p id="section-toc.1-1.11.2.3.1"><a href="#section-11.3" class="xref">11.3</a>.  <a href="#name-transaction-state-notice-ts" class="xref">Transaction State Notice (TSN)</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.11.2.4">
                <p id="section-toc.1-1.11.2.4.1"><a href="#section-11.4" class="xref">11.4</a>.  <a href="#name-embedded-in-reply-2" class="xref">Embedded in Reply</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12">
            <p id="section-toc.1-1.12.1"><a href="#section-12" class="xref">12</a>. <a href="#name-transaction-event-log-messa" class="xref">Transaction Event Log Messages</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.1">
                <p id="section-toc.1-1.12.2.1.1"><a href="#section-12.1" class="xref">12.1</a>.  <a href="#name-registry-inception-event-me" class="xref">Registry Inception Event Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.2">
                <p id="section-toc.1-1.12.2.2.1"><a href="#section-12.2" class="xref">12.2</a>.  <a href="#name-registry-rotation-event-mes" class="xref">Registry Rotation Event Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.3">
                <p id="section-toc.1-1.12.2.3.1"><a href="#section-12.3" class="xref">12.3</a>.  <a href="#name-backerless-acdc-issuance-me" class="xref">Backerless ACDC Issuance Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.4">
                <p id="section-toc.1-1.12.2.4.1"><a href="#section-12.4" class="xref">12.4</a>.  <a href="#name-backerless-acdc-revocation-" class="xref">Backerless ACDC Revocation Message Body</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.5">
                <p id="section-toc.1-1.12.2.5.1"><a href="#section-12.5" class="xref">12.5</a>.  <a href="#name-backered-acdc-issuance-mess" class="xref">Backered ACDC Issuance Message Body</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.12.2.5.2.1">
                    <p id="section-toc.1-1.12.2.5.2.1.1"><a href="#section-12.5.1" class="xref">12.5.1</a>.  <a href="#name-backered-acdc-revocation-me" class="xref">Backered ACDC Revocation Message Body</a></p>
</li>
                </ul>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.13">
            <p id="section-toc.1-1.13.1"><a href="#section-13" class="xref">13</a>. <a href="#name-appendix-cryptographic-stre" class="xref">Appendix: Cryptographic Strength and Security</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.13.2.1">
                <p id="section-toc.1-1.13.2.1.1"><a href="#section-13.1" class="xref">13.1</a>.  <a href="#name-cryptographic-strength" class="xref">Cryptographic Strength</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.13.2.2">
                <p id="section-toc.1-1.13.2.2.1"><a href="#section-13.2" class="xref">13.2</a>.  <a href="#name-information-theoretic-secur" class="xref">Information Theoretic Security and Perfect Security</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.14">
            <p id="section-toc.1-1.14.1"><a href="#section-14" class="xref">14</a>. <a href="#name-conventions-and-definitions" class="xref">Conventions and Definitions</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.15">
            <p id="section-toc.1-1.15.1"><a href="#section-15" class="xref">15</a>. <a href="#name-security-considerations" class="xref">Security Considerations</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.16">
            <p id="section-toc.1-1.16.1"><a href="#section-16" class="xref">16</a>. <a href="#name-iana-considerations" class="xref">IANA Considerations</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.17">
            <p id="section-toc.1-1.17.1"><a href="#section-17" class="xref">17</a>. <a href="#name-references" class="xref">References</a></p>
<ul class="compact toc ulBare ulEmpty">
<li class="compact toc ulBare ulEmpty" id="section-toc.1-1.17.2.1">
                <p id="section-toc.1-1.17.2.1.1"><a href="#section-17.1" class="xref">17.1</a>.  <a href="#name-normative-references" class="xref">Normative References</a></p>
</li>
              <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.17.2.2">
                <p id="section-toc.1-1.17.2.2.1"><a href="#section-17.2" class="xref">17.2</a>.  <a href="#name-informative-references" class="xref">Informative References</a></p>
</li>
            </ul>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.18">
            <p id="section-toc.1-1.18.1"><a href="#appendix-A" class="xref"></a><a href="#name-acknowledgments" class="xref">Acknowledgments</a></p>
</li>
          <li class="compact toc ulBare ulEmpty" id="section-toc.1-1.19">
            <p id="section-toc.1-1.19.1"><a href="#appendix-B" class="xref"></a><a href="#name-authors-address" class="xref">Author's Address</a></p>
</li>
        </ul>
</nav>
</section>
</div>
<div id="introduction">
<section id="section-1">
      <h2 id="name-introduction">
<a href="#section-1" class="section-number selfRef">1. </a><a href="#name-introduction" class="section-name selfRef">Introduction</a>
      </h2>
<p id="section-1-1">The main motivation for this work is to provide a secure decentralized foundation of attributional trust for the Internet as a trustable spanning layer in the form of an identifier system security overlay. This identifier system security overlay provides verifiable authorship (authenticity) of any message or data item via secure (cryptographically verifiable) attribution to a <em>cryptonymous (cryptographic strength pseudonymous)</em> <em>self-certifying identifier (SCID)</em> <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#UIT" class="xref">UIT</a>]</span><span>[<a href="#SCPK" class="xref">SCPK</a>]</span><span>[<a href="#SFS" class="xref">SFS</a>]</span><span>[<a href="#SCPN" class="xref">SCPN</a>]</span><span>[<a href="#SCURL" class="xref">SCURL</a>]</span><span>[<a href="#PKI" class="xref">PKI</a>]</span>.<a href="#section-1-1" class="pilcrow">¶</a></p>
<p id="section-1-2">A major flaw in the original design of the Internet Protocol was that it has no security layer(s) (i.e. Session or Presentation layers) to provide interoperable verifiable authenticity <span>[<a href="#RFC0791" class="xref">RFC0791</a>]</span>. There was no built-in mechanism for secure attribution to the source of a packet. Specifically, the IP packet header includes a source address field that indicates the IP address of the device that sent the packet. Anyone (including any intermediary) can forge an IP (Internet Protocol) packet. Because the source address of such a packet can be undetectably forged, a recipient may not be able to ascertain when or if the packet was sent by an imposter.  This means that secure attribution mechanisms for the Internet must be overlaid (bolted-on). KERI provides such a security overlay. We describe it as an identifier system security overlay.<a href="#section-1-2" class="pilcrow">¶</a></p>
<div id="self-certifying-identifier-scid">
<section id="section-1.1">
        <h3 id="name-self-certifying-identifier-">
<a href="#section-1.1" class="section-number selfRef">1.1. </a><a href="#name-self-certifying-identifier-" class="section-name selfRef">Self-Certifying IDentifier (SCID)</a>
        </h3>
<p id="section-1.1-1">The KERI identifier system overlay leverages the properties of cryptonymous <strong><em>self-certifying identifiers</em></strong> (SCIDs) which are based on asymmetric public-key cryptography (PKI) to provide end-verifiable secure attribution of any message or data item without needing to trust in any intermediary <span>[<a href="#PKI" class="xref">PKI</a>]</span><span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#UIT" class="xref">UIT</a>]</span><span>[<a href="#SCPK" class="xref">SCPK</a>]</span><span>[<a href="#SFS" class="xref">SFS</a>]</span><span>[<a href="#SCPN" class="xref">SCPN</a>]</span><span>[<a href="#SCURL" class="xref">SCURL</a>]</span>. A self-certifying identifier (SCID) is uniquely cryptographically derived from the public key of an asymmetric keypair, <code>(public, private)</code>. It is self-certifying in the sense that does not rely on a trusted entity. Any non-repudiable signature made with the private key may be verified by extracting the public key from either the identifier itself or incepting information uniquely associated with the cryptographic derivation process for the identifier. In a basic SCID, the mapping between an identifier and its controlling public key is self-contained in the identifier itself. A basic SCID is <em>ephemeral</em> i.e. it does not support rotation of its keypairs in the event of key weakness or compromise and therefore must be abandoned once the controlling private key becomes weakened or compromised from exposure. The class of identifiers that generalize SCIDs with enhanced properties such as persistence is called <em>autonomic identifiers</em> (AIDs).<a href="#section-1.1-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="autonomic-identifier-aid">
<section id="section-1.2">
        <h3 id="name-autonomic-identifier-aid">
<a href="#section-1.2" class="section-number selfRef">1.2. </a><a href="#name-autonomic-identifier-aid" class="section-name selfRef">Autonomic IDentifier (AID)</a>
        </h3>
<p id="section-1.2-1">A Key Event Log (KEL) gives rise to an enhanced class of SCIDs that are persistent, not ephemeral, because their keys may be refreshed or updated via rotation allowing secure control over the identifier in spite of key weakness or even compromise.
This family of generalized enhanced SCIDs we call <strong><em>autonomic identifiers</em></strong> (AIDs). <em>Autonomic</em> means self-governing, self-regulating, or self-managing and is evocative of the self-certifying, self-managing properties of this class of identifier.<a href="#section-1.2-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="key-pre-rotation-concept">
<section id="section-1.3">
        <h3 id="name-key-pre-rotation-concept">
<a href="#section-1.3" class="section-number selfRef">1.3. </a><a href="#name-key-pre-rotation-concept" class="section-name selfRef">Key Pre-rotation Concept</a>
        </h3>
<p id="section-1.3-1">An important innovation of KERI is that it solves the key rotation problem of PKI (including that of simple self-certifying identifiers) via a novel but elegant mechanism we call <strong><em>key pre-rotation</em></strong> <span>[<a href="#DAD" class="xref">DAD</a>]</span><span>[<a href="#KERI" class="xref">KERI</a>]</span>. This <em>pre-rotation</em> mechanism enables an entity to persistently maintain or regain control over an identifier in spite of the exposure-related weakening over time or even compromise of the current set of controlling (signing) keypairs. With key pre-rotation, control over the identifier can be re-established by rotating to a one-time use set of unexposed but pre-committed rotation keypairs that then become the current signing keypairs. Each rotation in turn cryptographically commits to a new set of rotation keys but without exposing them. Because the pre-rotated keypairs need never be exposed prior to their one-time use, their attack surface may be optimally minimized. The current key-state is maintained via an append-only <strong><em>verifiable data structure</em></strong> we call a <strong><em>key event log</em></strong> (KEL).<a href="#section-1.3-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="cryptographic-primitives">
<section id="section-1.4">
        <h3 id="name-cryptographic-primitives">
<a href="#section-1.4" class="section-number selfRef">1.4. </a><a href="#name-cryptographic-primitives" class="section-name selfRef">Cryptographic Primitives</a>
        </h3>
<div id="cesr">
<section id="section-1.4.1">
          <h4 id="name-cesr">
<a href="#section-1.4.1" class="section-number selfRef">1.4.1. </a><a href="#name-cesr" class="section-name selfRef">CESR</a>
          </h4>
<p id="section-1.4.1-1">A <em>**cryptographic primitive **</em>is a serialization of a value associated with a cryptographic operation including but not limited to a digest (hash), a salt, a seed, a private key, a public key, or a signature. All cryptographic primitives in KERI <span class="bcp14">MUST</span> be expressed using the CESR (Compact Event Streaming Representation) protocol <span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>.  CESR supports round trip lossless conversion between its text, binary, and raw domain representations and lossless composability between its text and binary domain representations. Composability is ensured between any concatenated group of text primitives and the binary equivalent of that group because all CESR primitives are aligned on 24-bit boundaries. Both the text and binary domain representations are serializations suitable for transmission over the wire. The text domain representation is also suitable to be embedded as a string value of a field or array element as part of a field map serialization such as JSON, CBOR, or MsgPack <span>[<a href="#RFC8259" class="xref">RFC8259</a>]</span><span>[<a href="#JSOND" class="xref">JSOND</a>]</span><span>[<a href="#RFC8949" class="xref">RFC8949</a>]</span><span>[<a href="#CBORC" class="xref">CBORC</a>]</span><span>[<a href="#MGPK" class="xref">MGPK</a>]</span>. The text domain uses the set of characters from the URL-safe variant of Base64 which in turn is a subset of the ASCII character set <span>[<a href="#RFC4648" class="xref">RFC4648</a>]</span><span>[<a href="#RFC0020" class="xref">RFC0020</a>]</span>. For the sake of readability, all examples in this specification will be expressed in CESR's text-domain.<a href="#section-1.4.1-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="qualified-cryptographic-primitive">
<section id="section-1.4.2">
          <h4 id="name-qualified-cryptographic-pri">
<a href="#section-1.4.2" class="section-number selfRef">1.4.2. </a><a href="#name-qualified-cryptographic-pri" class="section-name selfRef">Qualified Cryptographic Primitive</a>
          </h4>
<p id="section-1.4.2-1">When <em>qualified</em>, a cryptographic primitive includes a prepended derivation code (as a proem) that indicates the cryptographic algorithm or suite used for that derivation. This simplifies and compactifies the essential information needed to use that cryptographic primitive. All cryptographic primitives expressed in either text or binary CESR are <em>qualified</em> by definition. Qualification is an essential property of CESR <span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>. The CESR protocol supports several different types of encoding tables for different types of derivation codes. These tables include very compact codes. For example, a 256-bit (32-byte) digest using the BLAKE3 digest algorithm, i.e. Blake3-256, when expressed in text-domain CESR is 44 Base64 characters long and begins with the one character derivation code <code>E</code>, such as, <code>EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug</code> <span>[<a href="#BLAKE3" class="xref">BLAKE3</a>]</span><span>[<a href="#BLAKE3Spec" class="xref">BLAKE3Spec</a>]</span><span>[<a href="#BLAKE3Hash" class="xref">BLAKE3Hash</a>]</span>. The equivalent <em>qualified</em> binary domain representation is 33 bytes long.
Unless otherwise indicated, all cryptographic primitives in this specification will appear as <em>qualified</em> primitives using text-domain CESR.<a href="#section-1.4.2-1" class="pilcrow">¶</a></p>
</section>
</div>
</section>
</div>
<div id="identifier-system-security-overlay">
<section id="section-1.5">
        <h3 id="name-identifier-system-security-">
<a href="#section-1.5" class="section-number selfRef">1.5. </a><a href="#name-identifier-system-security-" class="section-name selfRef">Identifier System Security Overlay</a>
        </h3>
<p id="section-1.5-1">The function of KERI's identifier-system security overlay is to establish the authenticity (or authorship) of the message payload in an IP Packet by verifiably attributing it to a cryptonymous self-certifying identifier (AID) via an attached set of one or more asymmetric keypair-based non-repudiable digital signatures. The current valid set of associated asymmetric keypair(s) is proven via a verifiable data structure called a <strong><em>key event log</em></strong> (KEL) <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#VDS" class="xref">VDS</a>]</span><span>[<a href="#ESMT" class="xref">ESMT</a>]</span><span>[<a href="#RT" class="xref">RT</a>]</span>. The identifier system provides a mapping between the identifier and the keypair(s) that control the identifier, namely, the public key(s) from those keypairs. The private key(s) is secret and is not shared.<a href="#section-1.5-1" class="pilcrow">¶</a></p>
<p id="section-1.5-2">An authenticatable (verifiable) internet message (packet) or data item includes the identifier and data in its payload. Attached to the payload is a digital signature(s) made with the private key(s) from the controlling keypair(s). Given the identifier in a message, any verifier of a message (data item) can use the identifier system mapping to look up the public key(s) belonging to the controlling keypair(s). The verifier can then verify the attached signature(s) using that public key(s). Because the payload includes the identifier, the signature makes a non-repudiable cryptographic commitment to both the source identifier and the data in the payload.<a href="#section-1.5-2" class="pilcrow">¶</a></p>
<div id="security-overlay-flaws">
<section id="section-1.5.1">
          <h4 id="name-security-overlay-flaws">
<a href="#section-1.5.1" class="section-number selfRef">1.5.1. </a><a href="#name-security-overlay-flaws" class="section-name selfRef">Security Overlay Flaws</a>
          </h4>
<p id="section-1.5.1-1">There are two major flaws in conventional PKI-based identifier system security overlays (including the Internet's DNS/CA system) <span>[<a href="#PKI" class="xref">PKI</a>]</span><span>[<a href="#DNS" class="xref">DNS</a>]</span><span>[<a href="#RFC0799" class="xref">RFC0799</a>]</span><span>[<a href="#CAA" class="xref">CAA</a>]</span><span>[<a href="#CA" class="xref">CA</a>]</span><span>[<a href="#RFC5280" class="xref">RFC5280</a>]</span>.<a href="#section-1.5.1-1" class="pilcrow">¶</a></p>
<p id="section-1.5.1-2">The *first major flaw** is that the mapping between the identifier (domain name) and the controlling keypair(s) is merely asserted by a trusted entity e.g. certificate authority (CA) via a certificate. Because the mapping is merely asserted, a verifier can not cryptographically verify the mapping between the identifier and the controlling keypair(s) but must trust the operational processes of the trusted entity making that assertion, i.e. the CA who issued and signed the certificate. As is well known, a successful attack upon those operational processes may fool a verifier into trusting an invalid mapping i.e. the certificate is issued to the wrong keypair(s) albeit with a verifiable signature from a valid certificate authority. <span>[<a href="#CEDS" class="xref">CEDS</a>]</span><span>[<a href="#KDDH" class="xref">KDDH</a>]</span><span>[<a href="#DNSH" class="xref">DNSH</a>]</span><span>[<a href="#SFTCA" class="xref">SFTCA</a>]</span><span>[<a href="#DNSP" class="xref">DNSP</a>]</span><span>[<a href="#BGPC" class="xref">BGPC</a>]</span><span>[<a href="#BBGP" class="xref">BBGP</a>]</span>. Noteworthy is that the signature on the certificate is NOT made with the controlling keypairs of the identifier but made with keypairs controlled by the issuer i.e. the CA. The fact that the certificate is signed by the CA means that the mapping itself is not verifiable but merely that the CA asserted the mapping between keypair(s) and identifier. The certificate merely provides evidence of the authenticity of the assignment of the mapping but not evidence of the veracity of the mapping.<a href="#section-1.5.1-2" class="pilcrow">¶</a></p>
<p id="section-1.5.1-3">The <em>second major flaw</em> is that when rotating the valid signing keys there is no cryptographically verifiable way to link the new (rotated in) controlling/signing key(s) to the prior (rotated out) controlling/signing key(s). Key rotation is merely implicitly asserted by a trusted entity (CA) by issuing a new certificate with new controlling/signing keys.  Key rotation is necessary because over time the controlling keypair(s) of an identifier becomes weak due to exposure when used to sign messages and must be replaced. An explicit rotation mechanism first revokes the old keys and then replaces them with new keys. Even a certificate revocation list (CRL) as per RFC5280, with an online status protocol (OCSP) registration as per RFC6960, does not provide a cryptographically verifiable connection between the old and new keys, it is merely asserted <span>[<a href="#RFC5280" class="xref">RFC5280</a>]</span><span>[<a href="#RFC6960" class="xref">RFC6960</a>]</span><span>[<a href="#OCSPW" class="xref">OCSPW</a>]</span>. The lack of a single universal CRL or registry means that multiple potential replacements may be valid. From a cryptographic verifiability perspective, rotation by assertion with a new certificate that either implicitly or explicitly provides revocation and replacement is essentially the same as starting over by creating a brand new independent mapping between a given identifier and the controlling keypair(s). This start-over style of key rotation may well be one of the main reasons that PGP's web-of-trust failed <span>[<a href="#WOT" class="xref">WOT</a>]</span>. Without a universally verifiable revocation mechanism, then any rotation (revocation and replacement) assertions either explicit or implicit are mutually independent of each other. This lack of universal cryptographic verifiability of a rotation fosters ambiguity at any point in time as to the actual valid mapping between the identifier and its controlling keypair(s). In other words, for a given identifier, any or all assertions made by some set of CAs may be potentially valid.<a href="#section-1.5.1-3" class="pilcrow">¶</a></p>
<p id="section-1.5.1-4">We call the state of the controlling keys for an identifier at any time the key state. Cryptographic verifiability of the key state over time is essential to remove this ambiguity. Without this verifiability, the detection of potential ambiguity requires yet another bolt-on security overlay such as the certificate transparency system <span>[<a href="#CTE" class="xref">CTE</a>]</span><span>[<a href="#CTAOL" class="xref">CTAOL</a>]</span><span>[<a href="#RFC6962" class="xref">RFC6962</a>]</span><span>[<a href="#RT" class="xref">RT</a>]</span><span>[<a href="#VDS" class="xref">VDS</a>]</span><span>[<a href="#ESMT" class="xref">ESMT</a>]</span>.<a href="#section-1.5.1-4" class="pilcrow">¶</a></p>
<p id="section-1.5.1-5">The KERI protocol fixes both of these flaws using a combination of <strong><em>autonomic identifiers</em></strong>, <strong><em>key pre-rotation</em></strong>, a <strong><em>verifiable data structure</em></strong> (VDS) called a KEL as verifiable proof of key-state, and <strong><em>duplicity-evident</em></strong> mechanisms for evaluating and reconciling key state by validators <span>[<a href="#KERI" class="xref">KERI</a>]</span>. Unlike certificate transparency, KERI enables the detection of duplicity in the key state via non-repudiable cryptographic proofs of duplicity not merely the detection of inconsistency in the key state that may or may not be duplicitous <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#CTAOL" class="xref">CTAOL</a>]</span>.<a href="#section-1.5.1-5" class="pilcrow">¶</a></p>
</section>
</div>
<div id="triad-bindings">
<section id="section-1.5.2">
          <h4 id="name-triad-bindings">
<a href="#section-1.5.2" class="section-number selfRef">1.5.2. </a><a href="#name-triad-bindings" class="section-name selfRef">Triad Bindings</a>
          </h4>
<p id="section-1.5.2-1">In simple form an identifier-system security-overlay binds together a triad consisting of the <strong><em>identifier</em></strong>, <strong><em>keypairs</em></strong>, and <strong><em>controllers</em></strong>. By <strong><em>identifier</em></strong> we mean some string of characters. By <strong><em>keypairs</em></strong> we mean a set of asymmetric (public, private) cryptographic keypairs used to create and verify non-repudiable digital signatures. By <strong><em>controllers</em></strong> we mean the set of entities whose members each control a private key from the given set of <strong><em>keypairs</em></strong>. When those bindings are strong then the overlay is highly <em>invulnerable</em> to attack.  In contrast, when those bindings are weak then the overlay is highly <em>vulnerable</em> to attack. The bindings for a given identifier form a <em>triad</em> that binds together the set of <em>controllers</em>, the set of <em>keypairs</em>, and the <em>identifier</em>. To reiterate, the set of controllers is bound to the set of keypairs, the set of keypairs is bound to the identifier, and the identifier is bound to the set of controllers. This binding triad can be diagrammed as a triangle where the sides are the bindings and the vertices are the <em>identifier</em>, the set of <em>controllers</em>, and the set of <em>keypairs</em>. This triad provides verifiable <strong><em>control authority</em></strong> for the identifier.<a href="#section-1.5.2-1" class="pilcrow">¶</a></p>
<p id="section-1.5.2-2">With KERI all the bindings of the triad are strong because they are cryptographically verifiable with a minimum cryptographic strength or level of approximately 128 bits. See the Appendix on cryptographic strength for more detail.<a href="#section-1.5.2-2" class="pilcrow">¶</a></p>
<p id="section-1.5.2-3">The bound triad is created as follows:<a href="#section-1.5.2-3" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-1.5.2-4.1">Each controller in the set of controllers creates an asymmetric <code>(pubic, private)</code> keypair. The public key is derived from the private key or seed using a one-way derivation that <span class="bcp14">MUST</span> have a minimum cryptographic strength of approximately 128 bits <span>[<a href="#OWF" class="xref">OWF</a>]</span><span>[<a href="#COWF" class="xref">COWF</a>]</span>. Depending on the crypto-suite used to derive a keypair the private key or seed may itself have a length larger than 128 bits. A controller may use a cryptographic strength pseudo-random number generator (CSPRNG) <span>[<a href="#CSPRNG" class="xref">CSPRNG</a>]</span> to create the private key or seed material. Because the private key material must be kept secret, typically in a secure data store, the management of those secrets may be an important consideration. One approach to minimize the size of secrets is to create private keys or seeds from a secret salt. The salt <span class="bcp14">MUST</span> have an entropy of approximately 128 bits. The salt may then be stretched to meet the length requirements for the crypto suite's private key size <span>[<a href="#Salt" class="xref">Salt</a>]</span><span>[<a href="#Stretch" class="xref">Stretch</a>]</span>. In addition, a hierarchical deterministic derivation function may be used to further minimize storage requirements by leveraging a single salt for a set or sequence of private keys <span>[<a href="#HDKC" class="xref">HDKC</a>]</span>. Because each controller is the only entity in control (custody) of the private key, and the public key is universally uniquely derived from the private key using a cryptographic strength one-way function, then the binding between each controller and their keypair is as strong as the ability of the controller to keep that key private <span>[<a href="#OWF" class="xref">OWF</a>]</span><span>[<a href="#COWF" class="xref">COWF</a>]</span>. The degree of protection is up to each controller to determine. For example, a controller could choose to store their private key in a safe, at the bottom of a coal mine, air-gapped from any network, with an ex-special forces team of guards. Or the controller could choose to store it in an encrypted data store (key chain) on a secure boot mobile device with a biometric lock, or simply write it on a piece of paper and store it in a safe place. The important point is that the strength of the binding between controller and keypair does not need to be dependent on any trusted entity.<a href="#section-1.5.2-4.1" class="pilcrow">¶</a>
</li>
            <li class="normal" id="section-1.5.2-4.2">The identifier is universally uniquely derived from the set of public keys using a one-way derivation function <span>[<a href="#OWF" class="xref">OWF</a>]</span><span>[<a href="#COWF" class="xref">COWF</a>]</span>. It is therefore an AID (qualified SCID). Associated with each identifier (AID) is incepting information that <span class="bcp14">MUST</span> include a list of the set of <em>qualified</em> public keys from the controlling keypairs. In the usual case, the identifier is a <em>qualified</em> cryptographic digest of the serialization of all the incepting information for the identifier. Any change to even one bit of the incepting information changes the digest and hence changes the derived identifier. This includes any change to any one of the qualified public keys including its qualifying derivation code. To clarify, a <em>qualified</em> digest as identifier includes a derivation code as proem that indicates the cryptographic algorithm used for the digest. Thus a different digest algorithm results in a different identifier. In this usual case, the identifier is strongly cryptographically bound to not only the public keys but also any other incepting information from which the digest was generated.<a href="#section-1.5.2-4.2" class="pilcrow">¶</a>
</li>
          </ul>
<p id="section-1.5.2-5">A special case may arise when the set of public keys has only one member, i.e. there is only one controlling keypair. In this case, the controller of the identifier may choose to use only the <em>qualified</em> public key as the identifier instead of a <em>qualified</em> digest of the incepting information. In this case, the identifier is still strongly bound to the public key but is not so strongly bound to any other incepting information.  A variant of this single keypair special case is an identifier that can not be rotated. Another way of describing an identifier that cannot be rotated is that it is a <em>non-transferable</em> identifier because control over the identifier cannot be transferred to a different set of controlling keypairs. Whereas a rotatable keypair is <em>transferable</em> because control may be transferred via rotation to a new set of keypairs. Essentially, when non-transferable, the identifier's lifespan is <em>ephemeral</em>, not <em>persistent</em>, because any weakening or compromise of the controlling keypair means that the identifier must be abandoned. Nonetheless, there are important use cases for an <em>ephemeral</em> self-certifying identifier. In all cases, the derivation code in the identifier indicates the type of identifier, whether it be a digest of the incepting information (multiple or single keypair) or a single member special case derived from only the public key (both ephemeral or persistent).<a href="#section-1.5.2-5" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-1.5.2-6.1">Each controller in a set of controllers is may prove its contribution to the control authority over the identifier in either an interactive or non-interactive fashion. One form of interactive proof is to satisfy a challenge of that control. The challenger creates a unique challenge message. The controller responds by non-repudiably signing that challenge with the private key from the keypair under its control. The challenger can then cryptographically verify the signature using the public key from the controller's keypair. One form of non-interactive proof is to periodically contribute to a monotonically increasing sequence of non-repudiably signed updates of some data item. Each update includes a monotonically increasing sequence number or date-time stamp. Any observer can then cryptographically verify the signature using the public key from the controller's keypair and verify that the update was made by the controller.  In general, only members of the set of controllers can create verifiable non-repudiable signatures using their keypairs. Consequently, the identifier is strongly bound to the set of controllers via provable control over the keypairs.<a href="#section-1.5.2-6.1" class="pilcrow">¶</a>
</li>
          </ul>
<p id="section-1.5.2-7">*** Tetrad Bindings<a href="#section-1.5.2-7" class="pilcrow">¶</a></p>
<p id="section-1.5.2-8">At inception, the triad of identifier, keypairs, and controllers are strongly bound together. But in order for those bindings to persist after a key rotation, another mechanism is required. That mechanism is a verifiable data structure called a <em>key event log</em> (KEL) <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#VDS" class="xref">VDS</a>]</span>.  The KEL is not necessary for identifiers that are non-transferable and do not need to persist control via key rotation in spite of key weakness or compromise. To reiterate, transferable (persistent) identifiers each need a KEL, non-transferable (ephemeral) identifiers do not.<a href="#section-1.5.2-8" class="pilcrow">¶</a></p>
<p id="section-1.5.2-9">For persistent (transferable) identifiers, this additional mechanism may be bound to the triad to form a tetrad consisting of the KEL, the identifier, the set of keypairs, and the set of controllers. The first entry in the KEL is called the <em>inception event</em> which is a serialization of the incepting information associated with the identifier mentioned previously.<a href="#section-1.5.2-9" class="pilcrow">¶</a></p>
<p id="section-1.5.2-10">The <em>inception event</em> <span class="bcp14">MUST</span> include the list of controlling public keys. It <span class="bcp14">MUST</span> also include a signature threshold and <span class="bcp14">MUST</span> be signed by a set of private keys from the controlling keypairs that satisfy that threshold. Additionally, for transferability (persistence across rotation) the <em>inception event</em> <span class="bcp14">MUST</span> also include a list of digests of the set of pre-rotated public keys and a pre-rotated signature threshold that will become the controlling (signing) set of keypairs and threshold after a rotation.  A non-transferable identifier <span class="bcp14">MAY</span> have a trivial KEL that only includes an <em>inception event</em> but with a null set (empty list) of pre-rotated public keys.<a href="#section-1.5.2-10" class="pilcrow">¶</a></p>
<p id="section-1.5.2-11">A rotation is performed by appending to the KEL a <em>rotation event</em>. A <em>rotation event</em> <span class="bcp14">MUST</span> include a list of the set of pre-rotated public keys (not their digests) thereby exposing them and <span class="bcp14">MUST</span> be signed by a set of private keys from these newly exposed newly controlling but pre-rotated keypairs that satisfy the pre-rotated threshold. The rotation event <span class="bcp14">MUST</span> also include a list of the digests of a new set of pre-rotated keys as well as the signature threshold for the set of pre-rotated keypairs. At any point in time the transferability of an identifier can be removed via a <em>rotation event</em> that rotates to a null set (empty list) of pre-rotated public keys.<a href="#section-1.5.2-11" class="pilcrow">¶</a></p>
<p id="section-1.5.2-12">Each event in a KEL <span class="bcp14">MUST</span> include an integer sequence number that is one greater than the previous event. Each event after the inception event <span class="bcp14">MUST</span> also include a cryptographic digest of the previous event. This digest means that a given event is cryptographically bound to the previous event in the sequence. The list of digests or pre-rotated keys in the inception event cryptographically binds the inception event to a subsequent rotation event. Essentially making a forward commitment that forward chains together the events. The only valid rotation event that may follow the inception event must include the pre-rotated keys. But only the controller who created those keys and created the digests may verifiably expose them. Each rotation event in turn makes a forward commitment (chain) to the following rotation event via its list of pre-rotated key digests.   This makes the KEL a doubly (backward and forward) hash (digest) chained non-repudiably signed append-only verifiable data structure.<a href="#section-1.5.2-12" class="pilcrow">¶</a></p>
<p id="section-1.5.2-13">Because the signatures on each event are non-repudiable, the existence of an alternate but verifiable KEL for an identifier is provable evidence of duplicity. In KERI, there may be at most one valid KEL for any identifier or none at all. Any validator of a KEL may enforce this one valid KEL rule before relying on the KEL as proof of the current key state for the identifier. This protects the validator. Any unreconcilable evidence of duplicity means the validator does not trust (rely on) any KEL to provide the key state for the identifier. Rules for handling reconciliable duplicity will be discussed later.  From a validator's perspective, either there is one-and-only-one valid KEL or none at all. This protects the validator. This policy removes any potential ambiguity about key state.  The combination of a verifiable KEL made from non-repudiably signed backward and forward hash chained events together with the only-one-valid KEL rule strongly binds the identifier to its current key-state as given by that one valid KEL or not at all. This in turn binds the identifier to the controllers of the current keypairs given by the KEL thus completing the tetrad.<a href="#section-1.5.2-13" class="pilcrow">¶</a></p>
<p id="section-1.5.2-14">At inception, the KEL may be even more strongly bound to its tetrad by deriving the identifier from a digest of the <em>inception event</em>. Thereby even one change in not only the original controlling keys pairs but also the pre-rotated keypairs or any other incepting information included in the <em>inception event</em> will result in a different identifier.<a href="#section-1.5.2-14" class="pilcrow">¶</a></p>
<p id="section-1.5.2-15">The essense of the KERI protocol is a strongly bound tetrad of identifier, keypairs, controllers, and key event log that forms the basis of its identifier system security overlay. The KERI protocol introduces the concept of duplicity evident programming via duplicity evident verifiable data structures. The full detailed exposition of the protocol is provided in the following sections.<a href="#section-1.5.2-15" class="pilcrow">¶</a></p>
</section>
</div>
</section>
</div>
</section>
</div>
<div id="basic-terminology">
<section id="section-2">
      <h2 id="name-basic-terminology">
<a href="#section-2" class="section-number selfRef">2. </a><a href="#name-basic-terminology" class="section-name selfRef">Basic Terminology</a>
      </h2>
<p id="section-2-1">Several new terms were introduced above. These along with other terms helpful to describing KERI are defined below.<a href="#section-2-1" class="pilcrow">¶</a></p>
<span class="break"></span><dl class="dlParallel" id="section-2-2">
        <dt id="section-2-2.1">Primitive</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.2">
          <p id="section-2-2.2.1">A serialization of a unitary value. A <em>cryptographic primitive</em> is the serialization of a value associated with a cryptographic operation including but not limited to a digest (hash), a salt, a seed, a private key, a public key, or a signature. All <em>primitives</em> in KERI <span class="bcp14">MUST</span> be expressed in CESR (Compact Event Streaming Representation) <span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>.<a href="#section-2-2.2.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.3">Qualified</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.4">
          <p id="section-2-2.4.1">When <em>qualified</em>, a <em>cryptographic primitive</em> includes a prepended derivation code (as a proem) that indicates the cryptographic algorithm or suite used for that derivation. This simplifies and compactifies the essential information needed to use that <em>cryptographic primitive</em>. All <em>cryptographic primitives</em> expressed in either text or binary CESR are <em>qualified</em> by definition <span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>. Qualification is an essential property of CESR <span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>.<a href="#section-2-2.4.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.5">Cryptonym</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.6">
          <p id="section-2-2.6.1">A cryptographic pseudonymous identifier represented by a string of characters derived from a random or pseudo-random secret seed or salt via a one-way cryptogrphic function with a sufficiently high degree of cryptographic strength (e.g. 128 bits, see appendix on cryptographic strength) <span>[<a href="#OWF" class="xref">OWF</a>]</span><span>[<a href="#COWF" class="xref">COWF</a>]</span><span>[<a href="#TMCrypto" class="xref">TMCrypto</a>]</span><span>[<a href="#QCHC" class="xref">QCHC</a>]</span>. A <em>cryptonym</em> is a type of <em>primitive</em>. Due the enctropy in its derivation, a <em>cryptonym</em> is a universally unique identifier and only the controller of the secret salt or seed from which the <em>cryptonym</em> is derived may prove control over the <em>cryptonym</em>. Therefore the derivation function <span class="bcp14">MUST</span> be associated with the <em>cryptonym</em> and <span class="bcp14">MAY</span> be encoded as part of the <em>cryptonym</em> itself.<a href="#section-2-2.6.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.7">SCID</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.8">
          <p id="section-2-2.8.1">Self-Certifying IDentifier.  A self-certifying identifier (SCID) is a type of cryptonym that is uniquely cryptographically derived from the public key of an asymmetric non-repudiable signing keypair, <code>(public, private)</code>. It is self-certifying or more precisely self-authenticating because it does not rely on a trusted entity. The authenticity of a non-repudiable signature made with the private key may be verified by extracting the public key from either the identifier itself or incepting information uniquely associated with the cryptographic derivation process for the identifier. In a basic SCID, the mapping between an identifier and its controlling public key is self-contained in the identifier itself. A basic SCID is <em>ephemeral</em> i.e. it does not support rotation of its keypairs in the event of key weakness or compromise and therefore must be abandoned once the controlling private key becomes weakened or compromised from exposure <span>[<a href="#PKI" class="xref">PKI</a>]</span><span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#UIT" class="xref">UIT</a>]</span><span>[<a href="#SCPK" class="xref">SCPK</a>]</span><span>[<a href="#SFS" class="xref">SFS</a>]</span><span>[<a href="#SCPN" class="xref">SCPN</a>]</span><span>[<a href="#SCURL" class="xref">SCURL</a>]</span><span>[<a href="#PKI" class="xref">PKI</a>]</span>.<a href="#section-2-2.8.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.9">AID</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.10">
          <p id="section-2-2.10.1">Autonomic IDentifier. A self-managing <em>cryptonymous</em> identifier that <span class="bcp14">MUST</span> be self-certifying (self-authenticating) and <span class="bcp14">MUST</span> be encoded in CESR as a <em>qualified</em> cryptographic primitive. An AID <span class="bcp14">MAY</span> exhibit other self-managing properties such as transferable control using key <em>pre-rotation</em> which enables control over such an AID to persist in spite of key weakness or compromise due to exposure. Authoritative control over the identifier persists in spite of the evolution of the key-state.<a href="#section-2-2.10.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.11">Key State</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.12">
          <p id="section-2-2.12.1">Includes the set of currently authoritative keypairs for an AID and any other information necessary to secure or establish control authority over an AID.<a href="#section-2-2.12.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.13">Key Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.14">
          <p id="section-2-2.14.1">Concretely, the serialized data structure of an entry in the key event log for an AID. Abstractly, the data structure itself. Key events come in different types and are used primarily to establish or change the authoritative set of keypairs and/or anchor other data to the authoritative set of keypairs at the point in the key event log actualized by a particular entry.<a href="#section-2-2.14.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.15">Establishment Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.16">
          <p id="section-2-2.16.1">Key Event that establishes or changes the key-state which includes the current set of authoritative keypairs (key-state) for an AID.<a href="#section-2-2.16.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.17">Non-establishment Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.18">
          <p id="section-2-2.18.1">Key Event that does not change the current key-state for an AID. Typically the purpose of a non-establishment event is to anchor external data to a given key state as established by the most recent prior establishment event for an AID.<a href="#section-2-2.18.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.19">Inception Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.20">
          <p id="section-2-2.20.1">Establishment Event that provides the incepting information needed to derive an AID and establish its initial key-state.<a href="#section-2-2.20.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.21">Inception</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.22">
          <p id="section-2-2.22.1">The operation of creating an AID by binding it to the initial set of authoritative keypairs and any other associated information. This operation is made verifiable and duplicity evident upon acceptance as the <em>inception event</em> that begins the AID's KEL.<a href="#section-2-2.22.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.23">Rotation Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.24">
          <p id="section-2-2.24.1">Establishment Event that provides the information needed to change the key-state which includes a change to the set of authoritative keypairs for an AID.<a href="#section-2-2.24.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.25">Rotation</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.26">
          <p id="section-2-2.26.1">The operation of revoking and replacing the set of authoritative keypairs for an AID. This operation is made verifiable and duplicity evident upon acceptance as a <em>rotation event</em> that is appended to the AID's KEL.<a href="#section-2-2.26.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.27">Interaction Event</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.28">
          <p id="section-2-2.28.1">Non-establishment Event that anchors external data to the key-state as established by the most recent prior establishment event.<a href="#section-2-2.28.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.29">KEL</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.30">
          <p id="section-2-2.30.1">Key Event Log. A verifiable data structure that is a backward and forward chained, signed, append-only log of key events for an AID. The first entry in a KEL <span class="bcp14">MUST</span> be the one and only Inception Event of that AID.<a href="#section-2-2.30.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.31">Version</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.32">
          <p id="section-2-2.32.1">More than one version of a KEL for an AID exists when for any two instances of a KEL at least one event is unique between the two instances.<a href="#section-2-2.32.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.33">Verifiable</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.34">
          <p id="section-2-2.34.1">A KEL is verifiable means all content in a KEL including the digests and the signatures on that content is verifiably compliant with respect to the KERI protocol. In other words, the KEL is internally consistent and has integrity vis-a-vis its backward and forward chaining digests and authenticity vis-a-vis its non-repudiable signatures. As a verifiable data structure, the KEL satisfies the KERI protocol-defined rules for that verifiability. This includes the cryptographic verification of any digests or signatures on the contents so digested or signed.<a href="#section-2-2.34.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.35">Duplicity</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.36">
          <p id="section-2-2.36.1">Means the existence of more than one version of a verifiable KEL for a given AID. Because every event in a KEL must be signed with non-repudiable signatures any inconsistency between any two instances of the KEL for a given AID is provable evidence of duplicity on the part of the signers with respect to either or both the key-state of that AID and/or any anchored data at a given key-state.  A shorter KEL that does not differ in any of its events with respect to another but longer KEL is not duplicitous but merely incomplete.  To clarify, duplicity evident means that duplicity is provable via the presentation of a set of two or more mutually inconsistent but independently verifiable instances of a KEL.<a href="#section-2-2.36.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.37">Verifier</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.38">
          <p id="section-2-2.38.1">Any entity or agent that cryptographically verifies the signature(s) and/or digests on an event message. In order to verify a signature, a verifier must first determine which set of keys are or were the controlling set for an identifier when an event was issued. In other words, a verifier must first establish control authority for an identifier. For identifiers that are declared as non-transferable at inception, this control establishment merely requires a copy of the inception event for the identifier. For identifiers that are declared transferable at inception, this control establishment requires a complete copy of the sequence of establishment events (inception and all rotations) for the identifier up to the time at which the statement was issued.<a href="#section-2-2.38.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.39">Validator</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.40">
          <p id="section-2-2.40.1">Any entity or agent that evaluates whether or not a given signed statement as attributed to an identifier is valid at the time of its issuance.  A valid statement <span class="bcp14">MUST</span> be verifiable, that is, has a verifiable signature from the current controlling keypair(s) at the time of its issuance. Therefore a <em>Validator</em> must first act as a <em>Verifier</em> in order to establish the root authoritative set of keys. Once verified, the <em>Validator</em> may apply other criteria or constraints to the statement in order to determine its validity for a given use case. When that statement is part of a verifiable data structure then the cryptographic verification includes verifying digests and any other structural commitments or constraints.  To elaborate, with respect to an AID, for example, a <em>Validator</em> first evaluates one or more KELs in order to determine if it can rely on (trust) the key state (control authority) provided by any given KEL. A necessary but insufficient condition for a valid KEL is it is verifiable i.e. is internally inconsistent with respect to compliance with the KERI protocol. An invalid KEL from the perspective of a Validator may be either unverifiable or may be verifiable but duplicitous with respect to some other verifiable version of that KEL.  Detected duplicity by a given validator means that the validator has seen more than one verifiable version of a KEL for a given AID. Reconciliable duplicity means that one and only one version of a KEL as seen by a Validator is accepted as the authoritative version for that validator. Irreconcilable duplicity means that none of the versions of a KEL as seen by a validator are accepted as the authoritative one for that validator. The conditions for reconcilable duplicity are described later.<a href="#section-2-2.40.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.41">Message</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.42">
          <p id="section-2-2.42.1">Consists of a serialized data structure that comprises its body and a set of serialized data structures that are its attachments. Attachments may include but are not limited to signatures on the body.<a href="#section-2-2.42.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.43">Key Event Message</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.44">
          <p id="section-2-2.44.1">Message whose body is a key event and whose attachments may include signatures on its body.<a href="#section-2-2.44.1" class="pilcrow">¶</a></p>
</dd>
        <dd class="break"></dd>
<dt id="section-2-2.45">Key Event Receipt</dt>
        <dd style="margin-left: 1.5em" id="section-2-2.46">
          <p id="section-2-2.46.1">Message whose body references a key event and whose attachments <span class="bcp14">MUST</span> include one or more signatures on that key event.<a href="#section-2-2.46.1" class="pilcrow">¶</a></p>
</dd>
      <dd class="break"></dd>
</dl>
</section>
</div>
<div id="keypair-labeling-convention">
<section id="section-3">
      <h2 id="name-keypair-labeling-convention">
<a href="#section-3" class="section-number selfRef">3. </a><a href="#name-keypair-labeling-convention" class="section-name selfRef">Keypair Labeling Convention</a>
      </h2>
<p id="section-3-1">In order to make key event expressions both clearer and more concise, we use a keypair labeling convention. When an AID's key state is dynamic, i.e. the set of controlling keypairs is transferable, then the keypair labels are indexed in order to represent the successive sets of keypairs that constitute the key state at any position in the KEL (key event log). To elaborate, we use indexes on the labels for AIDs that are transferable to indicate which set of keypairs is associated with the AID at any given point in its key state or KEL. In contrast, when the key state is static, i.e. the set of controlling keypairs is non-transferable then no indexes are needed because the key state never changes.<a href="#section-3-1" class="pilcrow">¶</a></p>
<p id="section-3-2">Recall that, a keypair is a two tuple, <em>(public, private)</em>, of the respective public and private keys in the keypair. For a given AID, the labeling convention uses an uppercase letter label to represent that AID. When the key state is dynamic, a superscripted index on that letter is used to indicate which keypair is used at a given key state. Alternatively, the index may be omitted when the context defines which keypair and which key state, such as, for example, the latest or current key state. To reiterate, when the key state is static no index is needed.<a href="#section-3-2" class="pilcrow">¶</a></p>
<p id="section-3-3">In general, without loss of specificity, we use an uppercase letter label to represent both an AID and when indexed to represent its keypair or keypairs that are authoritative at a given key state for that AID. In addition, when expressed in tuple form the uppercase letter also represents the public key and the lowercase letter represents the private key for a given keypair. For example, let <em>A</em> denote and AID, then let* A* also denote a keypair which may be also expressed in tuple form as <em>(A, a)</em>. Therefore, when referring to the keypair itself as a pair and not the individual members of the pair, either the uppercase label, <em>A</em>, or the tuple, <em>(A, a)</em>, may be used to refer to the keypair itself. When referring to the individual members of the keypair then the uppercase letter, <em>A</em>, refers to the public key, and the lowercase letter, <em>a</em>, refers to the private key.<a href="#section-3-3" class="pilcrow">¶</a></p>
<p id="section-3-4">Let the sequence of keypairs that are authoritative (i.e establish control authority) for an AID be indexed by the zero-based integer-valued, strictly increasing by one, variable <em>i</em>. Furthermore, as described above, an establishment key event may change the key state. Let the sequence of establishment events be indexed by the zero-based integer-valued, strictly increasing by one, variable <em>j</em>. When the set of controlling keypairs that are authoritative for a given key state includes only one member, then <em>i = j</em> for every keypair, and only one index is needed. But when the set of keypairs used at any time for a given key state includes more than one member, then <em>i != j</em> for every keypair, and both indices are needed.<a href="#section-3-4" class="pilcrow">¶</a></p>
<p id="section-3-5">In the former case, where only one index is needed because <em>i = j</em>, let the indexed keypair for AID, <em>A</em>, be denoted by <em>A<sup>i</sup></em> or in tuple form by <em>(A<sup>i</sup>, a<sup>i</sup>)</em> where the keypair so indexed uses the <em>i<sup>th</sup></em> keypair from the sequence of all keypairs.  The keypair sequence may be expressed as the list, <em>[A<sup>0</sup>, A<sup>1</sup>, A<sup>2</sup>, ...]</em>. The zero element in this sequence is denoted by <em>A<sup>0</sup></em> or in tuple form by <em>(A<sup>0</sup>, a<sup>0</sup>)</em>.<a href="#section-3-5" class="pilcrow">¶</a></p>
<p id="section-3-6">In the latter case, where both indices are needed because <em>i != j</em>, let the indexed keypair for AID, <em>A</em>, be denoted by <em>A<sup>i,j</sup></em> or in tuple form by <em>(A<sup>i,j</sup>, a<sup>i,j</sup>)</em> where the keypair so indexed is authoritative or potentially authoritative for <em>i<sup>th</sup></em> keypair from the sequence of all keypairs that is authoritative in the the <em>j<sup>th</sup></em> key state. Suppose, for example, that for a given AID labeled <em>A</em> each key state uses three keypairs to establish control authority, then the sequence of the first two key states will consume the first six keypairs as given by the following list, <em>[A<sup>0,0</sup>, A<sup>1,0</sup>, A<sup>2,0</sup>, A<sup>3,1</sup>,  A<sup>4,1</sup>,  A<sup>5,1</sup>]</em>.<a href="#section-3-6" class="pilcrow">¶</a></p>
<p id="section-3-7">Furthermore, with pre-rotation, each public key from the set of pre-rotated keypairs may be hidden as a qualified cryptographic digest of that public key. The digest of the public key labeled <em>A</em> is represented using the functional notation <em>H(A)</em> for hash (digest). When singly indexed, the digest of <em>A<sup>i</sup></em> is denoted by <em>H(A&lt;/u&gt;<sup>i</sup>)</em> and when doubly indexed the digest of <em>A<sup>i,j</sup></em> is denoted by <em>H(A<sup>i,j</sup>}</em>. A pre-rotated keypair is potentially authoritative for the next or subsequent establishment event after the establishment event when the digest of the pre-rotated keypair first appears. Therefore its <em>j<sup>th</sup></em> index value is one greater than the <em>j<sup>th</sup></em> index value of the establishment event in which its digest first appears. As explained in more detail below, for partial rotation of a pre-rotated set, a pre-rotated keypair from a set of two or more pre-rotated keypairs is only potentially authoritative so that its actual authoritative <em>j<sup>th</sup></em> index may change when it is actually rotated in if ever.<a href="#section-3-7" class="pilcrow">¶</a></p>
<p id="section-3-8">Finally, each key event in a KEL <span class="bcp14">MUST</span> have a zero-based integer-valued, strictly increasing by one, sequence number. Abstractly we may use the variable <em>k</em> as an index on any keypair label to denote the sequence number of an event for which that keypair is authoritative. Usually, this appears as a subscript.  Thus any given keypair label could have three indices, namely, <em>i,j,k</em> that appear as follows, <em>A<sup>i,j</sup><sub>k</sub></em> where <em>i</em> denotes the <em>i<sup>th</sup></em> keypair from the sequence of all keypairs, <em>j</em> denotes the <em>j<sup>th</sup> establishment event in which the keypair is authoritative, and *k</em> represents the <em>k<sup>th</sup></em> key event in which the keypair is authoritative. When a KEL has only establishment events then <em>j = k</em>.<a href="#section-3-8" class="pilcrow">¶</a></p>
</section>
</div>
<div id="pre-rotation-detail">
<section id="section-4">
      <h2 id="name-pre-rotation-detail">
<a href="#section-4" class="section-number selfRef">4. </a><a href="#name-pre-rotation-detail" class="section-name selfRef">Pre-rotation Detail</a>
      </h2>
<p id="section-4-1">Each establishment event involves two sets of keys that each play a role that together establishes complete control authority over the AID associated at the location of that event in the KEL. To clarify, control authority is split between keypairs that hold signing authority and keypairs that hold rotation authority. A rotation revodes and replaces the keypairs that hold signing authority as well as replacing the keypairs that hold rotation authority. The two set sets of keys are labeled <em>current</em> and <em>next</em>. Each establishment event designates both sets of keypairs. The first (<em>current</em>) set consists of the authoritative signing keypairs bound to the AID at the location in the KEL where the establishment event occurs. The second (<em>next</em>) set consists of the pre-rotated authoritative rotation keypairs that will be actualized in the next (ensuing) establishment event. Each public key in the set of next (ensuing) pre-rotated public keys is hidden in or blinded by a digest of that key. When the establishment event is the inception event then the <em>current</em> set is the <em>initial</em> set. The pre-rotated <em>next</em> set of Rotation keypairs are one-time use only rotation keypairs, but <span class="bcp14">MAY</span> be repurposed as signing keypairs after their one time use to rotate.<a href="#section-4-1" class="pilcrow">¶</a></p>
<p id="section-4-2">In addition, each establishment event designates two threshold expressions, one for each set of keypairs (<em>current</em> and <em>next</em>). The <em>current</em> threshold determines the needed satisficing subset of signatures from the associated <em>current</em> set of keypairs for signing authority to be considered valid. The <em>next</em> threshold determines the needed satisficing subset of signatures from the associated <em>next</em> set of hidden keypairs for rotation authority to be considered valid. The simplest type of threshold expression for either threshold is an integer that is no greater than nor no less than the number of members in the set. An integer threshold acts as an <em>M of N</em> threshold where <em>M</em> is the threshold and <em>N</em> is the total number of keypairs represented by the public keys in the key list. If any set of <em>M</em> of the <em>N</em> private keys belonging to the public keys in the key list verifiably signs the event then the threshold is satisfied for the control authority role (signing or rotation) associated with the given key list and threshold .<a href="#section-4-2" class="pilcrow">¶</a></p>
<p id="section-4-3">To clarify, each establishment event <span class="bcp14">MUST</span> include a list (ordered) of the qualified public keys from each of the current (initial) set of keypairs), a threshold for the current set, a list (ordered) of the qualified cryptographic digests of the qualified public keys from the next set of keypairs, and a threshold for the next set. Each event <span class="bcp14">MUST</span> also include the AID itself as either a qualified public key or a qualified digest of the inception establishment event.<a href="#section-4-3" class="pilcrow">¶</a></p>
<p id="section-4-4">Each non-establishment event <span class="bcp14">MUST</span> be signed by a threshold-satisficing subset of private keys from the <em>current</em> set of keypairs from the most recent establishment event. A little more explanation is needed to understand the requirements for a valid set of signatures for each type of establishment event.<a href="#section-4-4" class="pilcrow">¶</a></p>
<div id="inception-event-pre-rotation">
<section id="section-4.1">
        <h3 id="name-inception-event-pre-rotatio">
<a href="#section-4.1" class="section-number selfRef">4.1. </a><a href="#name-inception-event-pre-rotatio" class="section-name selfRef">Inception Event Pre-rotation</a>
        </h3>
<p id="section-4.1-1">The creator of the inception event <span class="bcp14">MUST</span> create two sets of keypairs, the <em>current</em> (<em>initial</em>) set, and the <em>next</em> set. The private keys from the current set are kept as secrets. The public keys from the <em>current</em> set are exposed via inclusion in the inception event. Both the public and private keys from the <em>next</em> set are kept as secrets and only the cryptographic digests of the public keys from the <em>next</em> set are exposed via inclusion in the event. The public keys from the <em>next</em> set are only exposed in a subsequent establishment if any.  Both thresholds are exposed via inclusion in the event.<a href="#section-4.1-1" class="pilcrow">¶</a></p>
<p id="section-4.1-2">Upon emittance of the inception event, the <em>current</em> (<em>initial</em>) set of keypairs becomes the current set of verifiable authoritative signing keypairs for the identifier. Emittance of the inception event also issues the identifier. Moreover, to be verifiably authoritative, the inception event must be signed by a threshold satisficing subset of the <em>current</em> (<em>initial</em>) set of private keys. The inception event may be verified against the attached signatures using the included <em>current</em> (<em>initial</em>) list of public keys. When self-addressing, a digest of the serialization of the inception event provides the AID itself as derived by the SAID protocol <span>[<a href="#SAID-ID" class="xref">SAID-ID</a>]</span>.<a href="#section-4.1-2" class="pilcrow">¶</a></p>
<p id="section-4.1-3">There <span class="bcp14">MUST</span> be only one inception establishment event. All subsequent establishment events <span class="bcp14">MUST</span> be rotation events.<a href="#section-4.1-3" class="pilcrow">¶</a></p>
</section>
</div>
<div id="rotation-using-pre-rotation">
<section id="section-4.2">
        <h3 id="name-rotation-using-pre-rotation">
<a href="#section-4.2" class="section-number selfRef">4.2. </a><a href="#name-rotation-using-pre-rotation" class="section-name selfRef">Rotation Using Pre-rotation</a>
        </h3>
<p id="section-4.2-1">Unlike inception, the creator of a rotation event <span class="bcp14">MUST</span> create only one set of keypairs, the newly <em>next</em> set. Both the public and private keys from the newly <em>next</em> set are kept as secrets and only the cryptographic digests of the public keys from the newly <em>next</em> set are exposed via inclusion in the event. The list of newly <em>current</em> public keys <span class="bcp14">MUST</span> include the  an old  <em>next</em> threshold satisficing subset of old <em>next</em> public keys from the most recent prior establishment event.  For short, we denote the next threshold from the most recent prior establishment event as the <em>prior next</em> threshold, and the list of unblinded public keys taken from the blinded key digest list from the most recent prior establishment event as the <em>prior next</em> key list. The subset of old <em>prior next</em> keys that are included in the newly current set of public keys <span class="bcp14">MUST</span> be unhidden or unblinded because they appear as the public keys themselves and no longer appear as digests of the public keys. Both thresholds are exposed via inclusion in the event.<a href="#section-4.2-1" class="pilcrow">¶</a></p>
<p id="section-4.2-2">Upon emittance of the rotation event, the newly <em>current</em> keypairs become the <em>current</em> set of verifiable authoritative signing keypairs for the identifier. The old <em>current</em> set of keypairs from the previous establishment event has been revoked and replaced by the newly <em>current</em> set. Moreover, to be verifiably authoritative, the rotation event must be signed by a dual threshold satisficing subset of the newly <em>current</em> set of private keys. To elaborate, the set of signatures on a rotation event <span class="bcp14">MUST</span> satisfy two thresholds. These are the newly <em>current</em> threshold and the old  <em>prior next</em> threshold from the most recent prior establishment event. Therefore the newly <em>current</em> set of public keys must include a satisfiable subset with respect to the old <em>prior next</em> threshold of public keys from the old <em>prior next</em> key list. The included newly <em>current</em> list of public keys enables verification of the rotation event against the attached signatures.<a href="#section-4.2-2" class="pilcrow">¶</a></p>
<p id="section-4.2-3">The act of inclusion in each establishment event of the digests of the new <em>next</em> set of public keys performs a pre-rotation operation on that set by making a verifiable forward blinded commitment to that set. Consequently, no other set may be used to satisfy the threshold for the <em>next</em> rotation operation. Because the <em>next</em> set of pre-rotated keys is blinded (i.e. has not been exposed i.e. used to sign or even published) an attacker can't forge and sign a verifiable rotation operation without first unblinding the pre-rotated keys. Therefore, given sufficient cryptographic strength of the digests, the only attack surface available to the adversary is a side-channel attack on the private key store itself and not on signing infrastructure. But the creator of the pre-rotated private keys is free to make that key store as arbitrarily secure as needed because the pre-rotated keys are not used for signing until the next rotation.  In other words, as long as the creator keeps secret the pre-rotated public keys themselves, an attacker must attack the key storage infrastructure because side-channel attacks on signing infrastructure are obviated.<a href="#section-4.2-3" class="pilcrow">¶</a></p>
<p id="section-4.2-4">As explained later, for a validator, the first seen rule applies, that is, the first seen version of an event is the authoritative one for that validator. The first seen wins. In other words the first published becomes the first seen. Upon rotation, the old prior <em>next</em> keys are exposed but only after a new <em>next</em> set has been created and stored. Thus the creator is always able to stay one step ahead of an attacker. By the time a new rotation event is published, it is too late for an attacker to create a verifiable rotation event to supplant it because the orginal version has already been published and may be first seen by the validator. The window for an attacker is the network latency for the first published event to be first seen by the network of validators. Any later key compromise is too late.<a href="#section-4.2-4" class="pilcrow">¶</a></p>
<p id="section-4.2-5">In essence, each key set follows a rotation lifecycle where it changes its role with each rotation event. A pre-rotated keypair set starts as the member of the <em>next</em> key set holding one-time rotation control authority. On the ensuing rotation that keypair becomes part of the the <em>current</em> key set holding signing control authority. Finally on the following rotation that keypair is discarded. The lifecycle for the initial key set in an inception event is slightly different. The initial key set starts as the <em>current</em> set holding signing authority and is discarded on the ensuing rotation event if any.<a href="#section-4.2-5" class="pilcrow">¶</a></p>
</section>
</div>
<div id="pre-rotation-example">
<section id="section-4.3">
        <h3 id="name-pre-rotation-example">
<a href="#section-4.3" class="section-number selfRef">4.3. </a><a href="#name-pre-rotation-example" class="section-name selfRef">Pre-Rotation Example</a>
        </h3>
<p id="section-4.3-1">Recall that the keypairs for a given AID may be represented by the indexed letter label such as <em>A<sup>i,j</sup><sub>k</sub></em> where <em>i</em> denotes the <em>i<sup>th</sup></em> keypair from the sequence of all keypairs, <em>j</em> denotes the <em>j<sup>th</sup> establishment event in which the keypair is authoritative, and *k</em> represents the <em>k<sup>th</sup></em> key event in which the keypair is authoritative. When a KEL has only establishment events then <em>j = k</em>. When only one keypair is authoritative at any given key state then <em>i = j</em>.<a href="#section-4.3-1" class="pilcrow">¶</a></p>
<p id="section-4.3-2">Also, recall that a pre-rotated keypair is designated by the digest of its public key appearing in an establishment event. The digest is denoted as <em>H(A)</em> or <em>H(A<sup>i,j</sup><sub>k</sub>)</em> in indexed form. The appearance of the digest makes a forward verifiable cryptographic commitment that may be realized in the future when and if that public key is exposed and listed as a current authoritative signing key in a subsequent establishment event.<a href="#section-4.3-2" class="pilcrow">¶</a></p>
<p id="section-4.3-3">The following example illustrates the lifecycle roles of the key sets drawn from a sequence of keys used for three establishment events; one inception followed by two rotations. The initial number of authoritative keypairs is three and then changes to two and then changes back to three.<a href="#section-4.3-3" class="pilcrow">¶</a></p>
<table class="center" id="table-1">
          <caption><a href="#table-1" class="selfRef">Table 1</a></caption>
<thead>
            <tr>
              <th class="text-center" rowspan="1" colspan="1">Event</th>
              <th class="text-right" rowspan="1" colspan="1">Current Keypairs</th>
              <th class="text-right" rowspan="1" colspan="1">CT</th>
              <th class="text-right" rowspan="1" colspan="1">Next Keypairs</th>
              <th class="text-right" rowspan="1" colspan="1">NT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">0</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>0,0</sup>, A<sup>1,0</sup>, A<sup>2,0</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">2</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>3,1</sup>), H(A<sup>4,1</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">1</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">1</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>3,1</sup>, A<sup>4,1</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">1</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>5,2</sup>), H(A<sup>6,2</sup>), H(A<sup>7,2</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">2</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">2</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>5,2</sup>, A<sup>6,2</sup>, A<sup>7,2</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">2</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>8,3</sup>), H(A<sup>9,3</sup>), H(A<sup>10,3</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">2</td>
            </tr>
          </tbody>
        </table>
<ul class="normal">
<li class="normal" id="section-4.3-5.1">
            <em>CTH</em> means Current Threshold.<a href="#section-4.3-5.1" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.3-5.2">
            <em>NTH</em> means Next Threshold.<a href="#section-4.3-5.2" class="pilcrow">¶</a>
</li>
        </ul>
</section>
</div>
<div id="reserve-rotation">
<section id="section-4.4">
        <h3 id="name-reserve-rotation">
<a href="#section-4.4" class="section-number selfRef">4.4. </a><a href="#name-reserve-rotation" class="section-name selfRef">Reserve Rotation</a>
        </h3>
<p id="section-4.4-1">The pre-rotation mechanism supports partial pre-rotation or more exactly partial rotation of pre-rotated keypairs. One important use case for partial rotation is to enable pre-rotated keypairs designated in one establishment event to be held in reserve and not exposed at the next (immediately subsequent) establishment event. This reserve feature enables keypairs held by controllers as members of a set of pre-rotated keypairs to be used for the purpose of fault tolerance in the case of non-availability by other controllers while at the same time minimizing the burden of participation by the reserve members. In other words, a reserved pre-rotated keypair contributes to the potential availability and fault tolerance of control authority over the AID without necessarily requiring the participation of the reserve key-pair in a rotation until and unless it is needed to provide continuity of control authority in the event of a fault (non-availability of a non-reserved member). This reserve feature enables different classes of key controllers to contribute to the control authority over an AID. This enables provisional key control authority. For example, a key custodial service or key escrow service could hold a keypair in reserve to be used only upon satisfaction of the terms of the escrow agreement. This could be used to provide continuity of service in the case of some failure event. Provisional control authority may be used to prevent types of common-mode failures without burdening the provisional participants in the normal non-failure use cases.<a href="#section-4.4-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="custorial-rotation">
<section id="section-4.5">
        <h3 id="name-custorial-rotation">
<a href="#section-4.5" class="section-number selfRef">4.5. </a><a href="#name-custorial-rotation" class="section-name selfRef">Custorial Rotation</a>
        </h3>
<p id="section-4.5-1">Partial pre-rotation supports another important use case that of custodial key rotation. Because control authority is split between two key sets, the first for signing authority and the second (pre-roateted) for rotation authority the associated thresholds and key list can be structured in such a way that a designated custodial agent can hold signing authority while the  original controller can hold exclusive rotation authority. The holder of the rotation authority can then at any time without the cooperation of the custodial agent if need be revoke the agent's signing authority and assign it so some other agent or return that authority to itself.<a href="#section-4.5-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="basic-fractionally-weighted-threshold">
<section id="section-4.6">
        <h3 id="name-basic-fractionally-weighted">
<a href="#section-4.6" class="section-number selfRef">4.6. </a><a href="#name-basic-fractionally-weighted" class="section-name selfRef">Basic Fractionally Weighted Threshold</a>
        </h3>
<p id="section-4.6-1">This partial rotation feature for either reserve or custodial rotation authority is best employed with thresholds that are fractionally weighted. The exact syntax for fractionally weighted thresholds is provided later, but for the sake of explanation of partial pre-rotation, a summary is provided here. A fractionally weighted threshold consists of a list of one or more clauses where each clause is itself a list of legal rational fractions ( i.e. ratios of non-negative integers expressed as fractions, zero is not allowed in the denominator). Each entry in each clause in the fractional weight list corresponds one-to-one to a public key appearing in a key list in an establishment event. Key lists order a key set. A weight list of clauses orders a set of rational fraction weights. Satisfaction of a fractionally weighted threshold requires satisfaction of each and every clause in the list. In other words, the clauses are logically ANDed together. Satisfaction of any clause requires that the sum of the weights in that clause that correspond to verified signatures on that event must sum to at least one. Using rational fractions and rational fraction summation avoids the problem of floating-point rounding errors and ensures exactness and universality of threshold satisfaction computations.<a href="#section-4.6-1" class="pilcrow">¶</a></p>
<p id="section-4.6-2">For example, consider the following simple single clause fractionally weighted threshold, <em>[1/2, 1/2, 1/2]</em>. Three weights mean there <span class="bcp14">MUST</span> be exactly three corresponding key pairs. Let the three keypairs in one-to-one order be denoted by the list of indexed public keys, <em>[A<sup>0</sup>, A<sup>1</sup>, A<sup>2</sup>]. The threshold is satisfied if any two of the public keys sign because *1/2 + 1/2 = 1</em>. This is exactly equivalent to an integer-valued <em>2 of 3</em> threshold.<a href="#section-4.6-2" class="pilcrow">¶</a></p>
<p id="section-4.6-3">The order of appearance of the public key in a given key list and its associated threshold weight list <span class="bcp14">MUST</span> be the same.<a href="#section-4.6-3" class="pilcrow">¶</a></p>
<p id="section-4.6-4">Fractionally weighted thresholds become more interesting when the weights are not all equal or include multiple clauses. Consider the following five-element single clause fractionally weighted threshold list, <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em> and its corresponding public key list, *[A<sup>0</sup>, A<sup>1</sup>, A<sup>2</sup>, A<sup>3</sup>, A<sup>4</sup>].  Satisfaction would be met given signatures from any two or more of A<sup>0</sup>, A<sup>1</sup>, or A<sup>2</sup> because each of these keys has a weight of 1/2 and the combination of any two or more sums to 1 or more. Alternatively, satisfaction would be met with signatures from any one or more of A<sup>0</sup>, A<sup>1</sup>, or A<sup>2</sup> and both of A<sup>3</sup>, and A<sup>4</sup> because any of those combinations would sum to 1 or more. Because participation of A<sup>3</sup> and A<sup>4</sup> is not required as long as at least two of A<sup>0</sup>, A<sup>1</sup>, and A<sup>2</sup> are available then A<sup>3</sup> and A<sup>4</sup> may be treated as reserve members of the controlling set of keys. These reserve members only need to participate in the unfortunate event that only one of the other three is available. The flexibility of a fractionally weighted threshold enables redundancy in the combinations of keys needed to satisfice for both day-to-day and reserve contingency use cases.<a href="#section-4.6-4" class="pilcrow">¶</a></p>
<div id="partial-pre-rotation-detail">
<section id="section-4.6.1">
          <h4 id="name-partial-pre-rotation-detail">
<a href="#section-4.6.1" class="section-number selfRef">4.6.1. </a><a href="#name-partial-pre-rotation-detail" class="section-name selfRef">Partial Pre-rotation Detail</a>
          </h4>
<p id="section-4.6.1-1">Defined herein is a detailed description of the pre-rotation protocol. This protocol includes support for <em>partial pre-rotation</em> i.e. a rotation operation on a set of pre-rotated keys that may keep some keys in reserve (i.e unexposed) while exposing others as needed.<a href="#section-4.6.1-1" class="pilcrow">¶</a></p>
<p id="section-4.6.1-2">As described above, a valid <strong><em>rotation</em></strong> operation requires the satisfaction of two different thresholds. These are the <em>current</em> threshold of the given rotation (establishment) event with respect to its associated <em>current</em> public key list and the next threshold from the given rotation event's most recent prior establishment event with respect to its associated blinded next key digest list. For short, we denote the next threshold from the most recent prior establishment event as the <em>prior next</em> threshold, and the list of unblinded public keys taken from the blinded key digest list from the most recent prior establishment event as the <em>prior next</em> key list. Explication of the elements of the <em>prior next</em> key list requires exposing or unblinding the underlying public keys committed to by their corresponding digests that appear in the next key digest list of the most recent prior establishment event. The unexposed (blinded) public keys <span class="bcp14">MAY</span> be held in reserve.<a href="#section-4.6.1-2" class="pilcrow">¶</a></p>
<p id="section-4.6.1-3">More precisely, any rotation event's <em>current</em> public key list <span class="bcp14">MUST</span> include a satisfiable subset of the <em>prior next</em> key list with respect to the <em>prior next</em> threshold. In addition, any rotation event's <em>current</em> public key list <span class="bcp14">MUST</span> include a satisfiable set of public keys with respect to its <em>current</em> threshold. In other words, the current public key list must be satisfiable with respect to both the <em>current</em> and <em>prior next</em> thresholds.<a href="#section-4.6.1-3" class="pilcrow">¶</a></p>
<p id="section-4.6.1-4">To reiterate, in order to make verifiable the maintenance of the integrity of the forward commitment to the pre-rotated list of keys made by the <em>prior next</em> event, i.e. provide verifiable rotation control authority, the <em>current</em> key list <span class="bcp14">MUST</span> include a satisfiable subset of exposed (unblinded) pre-rotated next keys from the most recent prior establishment event where satisfiable is with respect to the  <em>prior next</em> threshold. Moreover, in order to establish verifiable signing control authority, the <em>current</em> key list <span class="bcp14">MUST</span> also include a satisfiable subset of public keys where satisfiable is with respect to the <em>current</em> threshold.<a href="#section-4.6.1-4" class="pilcrow">¶</a></p>
<p id="section-4.6.1-5">These two conditions are trivially satisfied whenever the <em>current</em> and <em>prior next</em> key lists and thresholds are equivalent. When both the <em>current</em> and the <em>prior next</em> key lists and thresholds are identical then the validation can be simplified by comparing the two lists and thresholds to confirm that they are identical and then confirming that the signatures satisfy the one threshold with respect to the one key list. When not identical, the validator <span class="bcp14">MUST</span> perform the appropriate set math to confirm compliance.<a href="#section-4.6.1-5" class="pilcrow">¶</a></p>
<p id="section-4.6.1-6">Recall, that the order of appearance of the public key in a given key list and its associated threshold weight list <span class="bcp14">MUST</span> be the same. The order of appearance, however, of any public keys that appear in both the <em>current</em> and <em>prior next</em> key lists <span class="bcp14">MAY</span> be different between the two key lists and hence the two associated threshold weight lists.  A validator <span class="bcp14">MUST</span> therefore confirm that the set of keys in the <em>current</em> key list truly includes a satisfiable subset of the <em>prior next</em> key list and that the <em>current</em> key list is satisfiable with respect to both the <em>current</em> and <em>prior next</em> thresholds. Actual satisfaction means that the set of attached signatures <span class="bcp14">MUST</span> satisfy both the <em>current</em> and <em>prior next</em> thresholds as applied to their respective key lists.<a href="#section-4.6.1-6" class="pilcrow">¶</a></p>
<p id="section-4.6.1-7">Suppose that the <em>current</em> public key list does not include a proper subset of the <em>prior next</em> key list. This means that no keys were held in reserve. This also means that the current key list is either identical to the prior next key list or is a superset of the prior next key list.  Nonetheless, such a rotation <span class="bcp14">MAY</span> change the <em>current</em> key list and or threshold with respect to the <em>prior next</em> key list and/or threshold as long as it meets the satisfiability constraints defined above.<a href="#section-4.6.1-7" class="pilcrow">¶</a></p>
<p id="section-4.6.1-8">If the <em>current</em> key list includes the full set of keys from the <em>prior next</em> key list then a <strong><em>full rotation</em></strong> has occurred, not a <strong><em>partial rotation</em></strong> because no keys were held in reserve or omitted. A <em>full rotation</em> <span class="bcp14">MAY</span> add new keys to the <em>current</em> key list and/or change the current threshold with respect to the <em>prior next</em> key list and threshold.<a href="#section-4.6.1-8" class="pilcrow">¶</a></p>
</section>
</div>
</section>
</div>
<div id="reserve-rotation-example">
<section id="section-4.7">
        <h3 id="name-reserve-rotation-example">
<a href="#section-4.7" class="section-number selfRef">4.7. </a><a href="#name-reserve-rotation-example" class="section-name selfRef">Reserve Rotation Example</a>
        </h3>
<p id="section-4.7-1">Provided here is an illustrative example to help to clarify the pre-rotation protocol, especially with regard to  and threshold satisfaction for reserve rotation.<a href="#section-4.7-1" class="pilcrow">¶</a></p>
<table class="center" id="table-2">
          <caption><a href="#table-2" class="selfRef">Table 2</a></caption>
<thead>
            <tr>
              <th class="text-center" rowspan="1" colspan="1">SN</th>
              <th class="text-center" rowspan="1" colspan="1">Role</th>
              <th class="text-right" rowspan="1" colspan="1">Keys</th>
              <th class="text-right" rowspan="1" colspan="1">Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">0</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>0</sup>, A<sup>1</sup>, A<sup>2</sup>, A<sup>3</sup>, A<sup>4</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">0</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>5</sup>), H(A<sup>6</sup>), H(A<sup>7</sup>), H(A<sup>8</sup>), H(A<sup>9</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">1</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>5</sup>, A<sup>6</sup>, A<sup>7</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">1</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>10</sup>), H(A<sup>11</sup>), H(A<sup>12</sup>), H(A<sup>8</sup>),H(A<sup>9</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">2</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>10</sup>, A<sup>8</sup>, A<sup>9</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">2</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>13</sup>), H(A<sup>14</sup>), H(A<sup>15</sup>), H(A<sup>16</sup>),H(A<sup>17</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">3</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>13</sup>, A<sup>14</sup>, A<sup>15</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">3</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>18</sup>), H(A<sup>19</sup>), H(A<sup>20</sup>), H(A<sup>16</sup>),H(A<sup>17</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">4</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>18</sup>, A<sup>20</sup>, A<sup>21</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">4</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>22</sup>), H(A<sup>23</sup>), H(A<sup>24</sup>), H(A<sup>16</sup>),H(A<sup>17</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">5</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>22</sup>, A<sup>25</sup>, A<sup>26</sup>, A<sup>16</sup>, A<sup>17</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 0, 0]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">5</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>27</sup>), H(A<sup>28</sup>), H(A<sup>29</sup>), H(A<sup>30</sup>),H(A<sup>31</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2, 1/4, 1/4]</em>
</td>
            </tr>
          </tbody>
        </table>
<p id="section-4.7-3">The meaning of the column labels is as follows:<a href="#section-4.7-3" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-4.7-4.1">SN is the sequence number of the event. Each event uses two rows in the table.<a href="#section-4.7-4.1" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-4.2">Role is either Current (Crnt) or Next and indicates the role of the key list and threshold on that row.<a href="#section-4.7-4.2" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-4.3">Keys is the list of public keys denoted with indexed label of the keypair sequence.<a href="#section-4.7-4.3" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-4.4">Threshold is the threshold of signatures that must be satisfied for validity.<a href="#section-4.7-4.4" class="pilcrow">¶</a>
</li>
        </ul>
<p id="section-4.7-5">Commentary of each event follows:<a href="#section-4.7-5" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-4.7-6.1">(0) Inception: Five keypairs have signing authority and five other keypairs have rotation authority. Any two of the first three or any one of the first three and both the last two are sufficient. This anticipates holding the last two in reserve.<a href="#section-4.7-6.1" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-6.2">(1) Rotation: The first three keypairs from the prior next, A<sup>5</sup>, A<sup>6</sup>, and A<sup>7</sup>, are rotated at the new current signing keypairs. This exposes the keypairs. The last two from the prior next, A<sup>8</sup> and A<sup>9</sup>, are held in reserve. They have not been exposed are included in the next key list.<a href="#section-4.7-6.2" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-6.3">(2) Rotation: The prior next keypairs, A<sup>11</sup> and A<sup>12</sup> are unavalible to sign the rotation and particpate as the part of the newly current signing keys. Therefore A<sup>8</sup> and A<sup>9</sup> must be activated (pulled out of reserve) and included and exposed as both one time rotation keys and newly current signing keys. The signing authority (weight) of each of A<sup>8</sup> and A<sup>9</sup> has been increased to 1/2 from 1/4. This means that any two of the three of A<sup>10</sup>, A<sup>8</sup>, and A<sup>9</sup> may satisfy the signing threshold. Nonetheless, the rotation event #2 <span class="bcp14">MUST</span> be signed by all three of A<sup>10</sup>, A<sup>8</sup>, and A<sup>9</sup> in order to satisfy the prior next threshold because in that threshold A<sup>8</sup>, and A<sup>9</sup>  only have a weight of 1/4.<a href="#section-4.7-6.3" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-6.4">(3) Rotation: The keypairs H(A<sup>16</sup>),H(A<sup>17</sup> have been held in reserve from event #2<a href="#section-4.7-6.4" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-6.5">(4) Rotation: The keypairs H(A<sup>16</sup>), H(A<sup>17</sup> continue to be held in reserve.<a href="#section-4.7-6.5" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.7-6.6">(5) Rotation: The keypairs A<sup>16</sup>, and A<sup>17</sup> are pulled out of reserved and exposed in order to perform the rotation because A<sup>23</sup>, and A<sup>24</sup> are unavailable. Two new keypairs, A<sup>25</sup>, A<sup>26</sup>, are added to the current signing key list. The current signing authority of A<sup>16</sup>, and A<sup>17</sup> is none because they are assigned a weight of 0 in the new current signing threshold. For the rotation event to be valid it must be signed by A<sup>22</sup>, A<sup>16</sup>, and A<sup>17</sup> in order to satisfy the prior next threshold for rotation authority and also must be signed by any two of A<sup>22</sup>, A<sup>25</sup>, and A<sup>26</sup> in order to satisfy the new current signing authority for the event itself. This illustrates how reserved keypairs may be used exclusively for rotation authority and not for signing authority.<a href="#section-4.7-6.6" class="pilcrow">¶</a>
</li>
        </ul>
</section>
</div>
<div id="custodial-rotation-example">
<section id="section-4.8">
        <h3 id="name-custodial-rotation-example">
<a href="#section-4.8" class="section-number selfRef">4.8. </a><a href="#name-custodial-rotation-example" class="section-name selfRef">Custodial Rotation Example</a>
        </h3>
<p id="section-4.8-1">Provided here is an illustrative example to help to clarify the pre-rotation protocol, especially with regard to threshold satisfaction for custodial rotation.<a href="#section-4.8-1" class="pilcrow">¶</a></p>
<table class="center" id="table-3">
          <caption><a href="#table-3" class="selfRef">Table 3</a></caption>
<thead>
            <tr>
              <th class="text-center" rowspan="1" colspan="1">SN</th>
              <th class="text-center" rowspan="1" colspan="1">Role</th>
              <th class="text-right" rowspan="1" colspan="1">Keys</th>
              <th class="text-right" rowspan="1" colspan="1">Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">0</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>0</sup>, A<sup>1</sup>, A<sup>2</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">0</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>3</sup>), H(A<sup>4</sup>), H(A<sup>5</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">1</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>3</sup>, A<sup>4</sup>, A<sup>5</sup>, A<sup>6</sup>, A<sup>7</sup>, A<sup>8</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[0, 0, 0, 1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">1</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>9</sup>), H(A<sup>10</sup>), H(A<sup>11</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">2</td>
              <td class="text-center" rowspan="1" colspan="1">Crnt</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[A<sup>9</sup>, A<sup>10</sup>, A<sup>11</sup>, A<sup>12</sup>, A<sup>13</sup>, A<sup>14</sup>]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[0, 0, 0, 1/2, 1/2, 1/2]</em>
</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="1" colspan="1">2</td>
              <td class="text-center" rowspan="1" colspan="1">Next</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[H(A<sup>15</sup>), H(A<sup>16</sup>), H(A<sup>17</sup>)]</em>
</td>
              <td class="text-right" rowspan="1" colspan="1">
                <em>[1/2, 1/2, 1/2]</em>
</td>
            </tr>
          </tbody>
        </table>
<p id="section-4.8-3">The meaning of the column labels is as follows:<a href="#section-4.8-3" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-4.8-4.1">SN is the sequence number of the event. Each event uses two rows in the table.<a href="#section-4.8-4.1" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.8-4.2">Role is either Current (Crnt) or Next and indicates the role of the key list and threshold on that row.<a href="#section-4.8-4.2" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.8-4.3">Keys is the list of public keys denoted with indexed label of the keypair sequence.<a href="#section-4.8-4.3" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.8-4.4">Threshold is the threshold of signatures that must be satisfied for validity.<a href="#section-4.8-4.4" class="pilcrow">¶</a>
</li>
        </ul>
<p id="section-4.8-5">Commentary of each event follows:<a href="#section-4.8-5" class="pilcrow">¶</a></p>
<ul class="normal">
<li class="normal" id="section-4.8-6.1">(0) Inception: The private keys from current signing keypairs  A<sup>0</sup>, A<sup>1</sup>, and A<sup>2</sup> are held by the custodian of the identifier. The owner of the identifier provides the digests of the next rotation keypairs, H(A<sup>3</sup>), H(A<sup>4</sup>), and H(A<sup>5</sup>) to the custodian in order that the custodian may include them in the event and then sign the event. The owner holds the private keys from the next rotation keypairs A<sup>3</sup>, A<sup>4</sup>, and A<sup>5</sup>. A self-addressing AID would then be created by the formulation of the inception event. Once formed, the custodian controls the signing authority over the identifier by virtue of holding the associated private keys for the current key list. But the owner controls the rotation authority by virtue of holding the associated private keys for the next key list. Because the controller of the rotation authority may at their sole discretion revoke and replace the keys that hold signing authority, the owner, holder of the next private keys, is ultimately in control of the identifier so constituted by this inception event.<a href="#section-4.8-6.1" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.8-6.2">(1) Rotation: The owner changes custodians with this event. The new custodian creates new current signing keypairs, A<sup>6</sup>, A<sup>7</sup>, and A<sup>8</sup> and holds the associated private keys. The new custodian provides the public keys A<sup>6</sup>, A<sup>7</sup>, and A<sup>8</sup> to the owner so that the owner can formulate and sign the rotation event that transfers signing authority to the new custodian. The owner exposes its rotation public keys,  A<sup>3</sup>, A<sup>4</sup>, and A<sup>5</sup> by including them in the new current key list. But the weights of those rotation keys in the new current signing threshold are all 0 so they have no signing authority.  The owner creates a new set of next keypairs and includes their public key digests, H(A<sup>9</sup>), H(A<sup>10</sup>), H(A<sup>11</sup>) in the new next key list. The owner holds the associated private keys and thereby retains rotation authority. This event <span class="bcp14">MUST</span> be signed by any two of A<sup>3</sup>, A<sup>4</sup>, and A<sup>5</sup> in order to satisfy the prior next threshold and also <span class="bcp14">MUST</span> be signed by any two A<sup>6</sup>, A<sup>7</sup>, and A<sup>8</sup> in order to satisfy the new current signing threshold. The new current threshold and new next threshold clearly delineate that the new custodian now holds exclusive signing authority and owner continues to retain exclusive rotation authority.<a href="#section-4.8-6.2" class="pilcrow">¶</a>
</li>
          <li class="normal" id="section-4.8-6.3">(2) Rotation: Change to yet another custodian following the same pattern as event #1<a href="#section-4.8-6.3" class="pilcrow">¶</a>
</li>
        </ul>
</section>
</div>
</section>
</div>
<div id="keri-data-structures">
<section id="section-5">
      <h2 id="name-keri-data-structures">
<a href="#section-5" class="section-number selfRef">5. </a><a href="#name-keri-data-structures" class="section-name selfRef">KERI Data Structures</a>
      </h2>
<p id="section-5-1">A KERI data structure such as a key event message body may be abstractly modeled as a nested <code>key: value</code> mapping. To avoid confusion with the cryptographic use of the term <em>key</em> we instead use the term <em>field</em> to refer to a mapping pair and the terms <em>field label</em> and <em>field value</em> for each member of a pair. These pairs can be represented by two tuples e.g <code>(label, value)</code>. We qualify this terminology when necessary by using the term <em>field map</em> to reference such a mapping. <em>Field maps</em> may be nested where a given <em>field value</em> is itself a reference to another <em>field map</em>.  We call this nested set of fields a <em>nested field map</em> or simply a <em>nested map</em> for short. A <em>field</em> may be represented by a framing code or block delimited serialization.  In a block delimited serialization, such as JSON, each <em>field map</em> is represented by an object block with block delimiters such as <code>{}</code> <span>[<a href="#RFC8259" class="xref">RFC8259</a>]</span><span>[<a href="#JSOND" class="xref">JSOND</a>]</span><span>[<a href="#RFC4627" class="xref">RFC4627</a>]</span>. Given this equivalence, we may also use the term <em>block</em> or <em>nested block</em> as synonymous with <em>field map</em> or <em>nested field map</em>. In many programming languages, a field map is implemented as a dictionary or hash table in order to enable performant asynchronous lookup of a <em>field value</em> from its <em>field label</em>. Reproducible serialization of <em>field maps</em> requires a canonical ordering of those fields. One such canonical ordering is called insertion or field creation order. A list of <code>(field, value)</code> pairs provides an ordered representation of any field map. Most programming languages now support ordered dictionaries or hash tables that provide reproducible iteration over a list of ordered field <code>(label, value)</code> pairs where the ordering is the insertion or field creation order. This enables reproducible round trip serialization/deserialization of <em>field maps</em>. Serialized KERI data structures depend on insertion-ordered field maps for their canonical serialization/deserialization. KERI data structures support multiple serialization types, namely JSON, CBOR, MGPK, and CESR but for the sake of simplicity, we will only use JSON herein for examples <span>[<a href="#RFC8259" class="xref">RFC8259</a>]</span><span>[<a href="#JSOND" class="xref">JSOND</a>]</span><span>[<a href="#CBORC" class="xref">CBORC</a>]</span><span>[<a href="#RFC8949" class="xref">RFC8949</a>]</span><span>[<a href="#MGPK" class="xref">MGPK</a>]</span><span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>. The basic set of normative field labels in KERI field maps is defined in the table in the following section.<a href="#section-5-1" class="pilcrow">¶</a></p>
<div id="field-labels-for-keri-data-structures">
<section id="section-5.1">
        <h3 id="name-field-labels-for-keri-data-">
<a href="#section-5.1" class="section-number selfRef">5.1. </a><a href="#name-field-labels-for-keri-data-" class="section-name selfRef">Field Labels for KERI Data Structures</a>
        </h3>
<table class="center" id="table-4">
          <caption><a href="#table-4" class="selfRef">Table 4</a></caption>
<thead>
            <tr>
              <th class="text-left" rowspan="1" colspan="1">Label</th>
              <th class="text-left" rowspan="1" colspan="1">Title</th>
              <th class="text-left" rowspan="1" colspan="1">Description</th>
              <th class="text-left" rowspan="1" colspan="1">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">v</td>
              <td class="text-left" rowspan="1" colspan="1">Version String</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">i</td>
              <td class="text-left" rowspan="1" colspan="1">Identifier Prefix  (AID)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">s</td>
              <td class="text-left" rowspan="1" colspan="1">Sequence Number</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">t</td>
              <td class="text-left" rowspan="1" colspan="1">Message Type</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">te</td>
              <td class="text-left" rowspan="1" colspan="1">Last received Event Message Type in a Key State Notice</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">d</td>
              <td class="text-left" rowspan="1" colspan="1">Event SAID</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">p</td>
              <td class="text-left" rowspan="1" colspan="1">Prior Event SAID</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">kt</td>
              <td class="text-left" rowspan="1" colspan="1">Keys Signing Threshold</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">k</td>
              <td class="text-left" rowspan="1" colspan="1">List of Signing Keys (ordered key set)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">nt</td>
              <td class="text-left" rowspan="1" colspan="1">Next Keys Signing Threshold</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">n</td>
              <td class="text-left" rowspan="1" colspan="1">List of Next Key Digests (ordered key digest set)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">bt</td>
              <td class="text-left" rowspan="1" colspan="1">Backer Threshold</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">b</td>
              <td class="text-left" rowspan="1" colspan="1">List of Backers  (ordered backer set of AIDs)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">br</td>
              <td class="text-left" rowspan="1" colspan="1">List of Backers to Remove (ordered backer set of AIDS)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">ba</td>
              <td class="text-left" rowspan="1" colspan="1">List of Backers to Add (ordered backer set of AIDs)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">c</td>
              <td class="text-left" rowspan="1" colspan="1">List of Configuration Traits/Modes</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">a</td>
              <td class="text-left" rowspan="1" colspan="1">List of Anchors (seals)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">di</td>
              <td class="text-left" rowspan="1" colspan="1">Delegator Identifier Prefix  (AID)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">rd</td>
              <td class="text-left" rowspan="1" colspan="1">Merkle Tree Root Digest (SAID)</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">ee</td>
              <td class="text-left" rowspan="1" colspan="1">Last Establishment Event Map</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
            <tr>
              <td class="text-left" rowspan="1" colspan="1">vn</td>
              <td class="text-left" rowspan="1" colspan="1">Version Number ("major.minor")</td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
              <td class="text-left" rowspan="1" colspan="1"> </td>
            </tr>
          </tbody>
        </table>
<p id="section-5.1-2">A field label may have different values in different contexts but <span class="bcp14">MUST</span> not have a different field value <strong><em>type</em></strong>. This requirement makes it easier to implement in strongly typed languages with rigid data structures. Notwithstanding the former, some field value types <span class="bcp14">MAY</span> be a union of elemental value types.<a href="#section-5.1-2" class="pilcrow">¶</a></p>
<p id="section-5.1-3">Because the order of appearance of fields is enforced in all KERI data structures, whenever a field appears (in a given message or block in a message) the message in which a label appears <span class="bcp14">MUST</span> provide the necessary context to fully determine the meaning of that field and hence the field value type and associated semantics.<a href="#section-5.1-3" class="pilcrow">¶</a></p>
</section>
</div>
<div id="compact-labels">
<section id="section-5.2">
        <h3 id="name-compact-labels">
<a href="#section-5.2" class="section-number selfRef">5.2. </a><a href="#name-compact-labels" class="section-name selfRef">Compact Labels</a>
        </h3>
<p id="section-5.2-1">The primary field labels are compact in that they use only one or two characters. KERI is meant to support resource-constrained applications such as supply chain or IoT (Internet of Things) applications. Compact labels better support resource-constrained applications in general. With compact labels, the over-the-wire verifiable signed serialization consumes a minimum amount of bandwidth. Nevertheless, without loss of generality, a one-to-one normative semantic overlay using more verbose expressive field labels may be applied to the normative compact labels after verification of the over-the-wire serialization. This approach better supports bandwidth and storage constraints on transmission while not precluding any later semantic post-processing. This is a well-known design pattern for resource-constrained applications.<a href="#section-5.2-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="special-label-ordering-requirements">
<section id="section-5.3">
        <h3 id="name-special-label-ordering-requ">
<a href="#section-5.3" class="section-number selfRef">5.3. </a><a href="#name-special-label-ordering-requ" class="section-name selfRef">Special Label Ordering Requirements</a>
      </h3>
</section>
</div>
<div id="version-string-field">
<section id="section-5.4">
        <h3 id="name-version-string-field">
<a href="#section-5.4" class="section-number selfRef">5.4. </a><a href="#name-version-string-field" class="section-name selfRef">Version String Field</a>
        </h3>
<p id="section-5.4-1">The version string, <code>v</code>, field <span class="bcp14">MUST</span> be the first field in any top-level KERI field map in which it appears. Typically the version string, <code>v</code>, field appears as the first top-level field in a KERI message body. This enables a RegEx stream parser to consistently find the version string in any of the supported serialization formats for KERI messages. The <code>v</code> field provides a regular expression target for determining the serialization format and size (character count) of a serialized KERI message body. A stream parser may use the version string to extract and deserialize (deterministically) any serialized KERI message body in a stream of serialized KERI messages. Each KERI message in a stream may use a different serialization type.<a href="#section-5.4-1" class="pilcrow">¶</a></p>
<p id="section-5.4-2">The format of the version string is <code>KERIvvSSSShhhhhh_</code>. The first four characters <code>KERI</code> indicate the enclosing field map serialization. The next two characters, <code>vv</code> provide the lowercase hexadecimal notation for the major and minor version numbers of the version of the KERI specification used for the serialization. The first <code>v</code> provides the major version number and the second <code>v</code> provides the minor version number. For example, <code>01</code> indicates major version 0 and minor version 1 or in dotted-decimal notation <code>0.1</code>. Likewise <code>1c</code> indicates major version 1 and minor version decimal 12 or in dotted-decimal notation <code>1.12</code>. The next four characters <code>SSSS</code> indicate the serialization type in uppercase. The four supported serialization types are <code>JSON</code>, <code>CBOR</code>, <code>MGPK</code>, and <code>CESR</code> for the JSON, CBOR, MessagePack, and CESR serialization standards respectively <span>[<a href="#JSOND" class="xref">JSOND</a>]</span><span>[<a href="#RFC4627" class="xref">RFC4627</a>]</span><span>[<a href="#CBORC" class="xref">CBORC</a>]</span><span>[<a href="#RFC8949" class="xref">RFC8949</a>]</span><span>[<a href="#MGPK" class="xref">MGPK</a>]</span><span>[<a href="#CESR-ID" class="xref">CESR-ID</a>]</span>. The next six characters provide in lowercase hexadecimal notation the total number of characters in the serialization of the KERI message body. The maximum length of a given KERI message body is thereby constrained to be <em>2<sup>24</sup> = 16,777,216</em> characters in length. The final character <code>-</code> is the version string terminator. This enables later versions of ACDC to change the total version string size and thereby enable versioned changes to the composition of the fields in the version string while preserving deterministic regular expression extractability of the version string. Although a given KERI serialization type may use field map delimiters or framing code characters that appear before (i.e. prefix) the version string field in a serialization, the set of possible prefixes is sufficiently constrained by the allowed serialization protocols to guarantee that a regular expression can determine unambiguously the start of any ordered field map serialization that includes the version string as the first field value. Given the version string, a parser may then determine the end of the serialization so that it can extract the full serialization (KERI message body) from the stream without first deserializing it or parsing it field-by-field. This enables performant stream parsing and off-loading of KERI message streams that include any or all of the supported serialization types interleaved in a single stream.<a href="#section-5.4-2" class="pilcrow">¶</a></p>
</section>
</div>
<div id="said-self-addressing-identifier-fields">
<section id="section-5.5">
        <h3 id="name-said-self-addressing-identi">
<a href="#section-5.5" class="section-number selfRef">5.5. </a><a href="#name-said-self-addressing-identi" class="section-name selfRef">SAID (Self-Addressing IDentifier) Fields</a>
        </h3>
<p id="section-5.5-1">Some fields in KERI data structures may have for their value a SAID. In this context, <code>d</code> is short for digest, which is short for Self-Addressing IDentifier (SAID). A SAID follows the SAID protocol <span>[<a href="#SAID-ID" class="xref">SAID-ID</a>]</span>. Essentially a SAID is a Self-Addressing IDentifier (self-referential content addressable). A SAID is a special type of cryptographic digest of its encapsulating <em>field map</em> (block). The encapsulating block of a SAID is called a SAD (Self-Addressed Data). Using a SAID as a <em>field value</em> enables a more compact but secure representation of the associated block (SAD) from which the SAID is derived. Any nested field map that includes a SAID field (i.e. is, therefore, a SAD) may be compacted into its SAID. The uncompacted blocks for each associated SAID may be attached or cached to optimize bandwidth and availability without decreasing security.<a href="#section-5.5-1" class="pilcrow">¶</a></p>
<p id="section-5.5-2">Each SAID provides a stable universal cryptographically verifiable and agile reference to its encapsulating block (serialized <em>field map</em>).<a href="#section-5.5-2" class="pilcrow">¶</a></p>
<p id="section-5.5-3">Recall that a cryptographic commitment (such as a digital signature or cryptographic digest) on a given digest with sufficient cryptographic strength including collision resistance <span>[<a href="#HCR" class="xref">HCR</a>]</span><span>[<a href="#QCHC" class="xref">QCHC</a>]</span> is equivalent to a commitment to the block from which the given digest was derived.  Specifically, a digital signature on a SAID makes a verifiable cryptographic non-repudiable commitment that is equivalent to a commitment on the full serialization of the associated block from which the SAID was derived. This enables reasoning about KERI data structures in whole or in part via their SAIDS in a fully interoperable, verifiable, compact, and secure manner. This also supports the well-known bow-tie model of Ricardian Contracts <span>[<a href="#RC" class="xref">RC</a>]</span>. This includes reasoning about the whole KERI data structure given by its top-level SAID, <code>d</code>, field as well as reasoning about any nested or attached data structures using their SAIDS.<a href="#section-5.5-3" class="pilcrow">¶</a></p>
</section>
</div>
<div id="aid-autonomic-identifier-fields">
<section id="section-5.6">
        <h3 id="name-aid-autonomic-identifier-fi">
<a href="#section-5.6" class="section-number selfRef">5.6. </a><a href="#name-aid-autonomic-identifier-fi" class="section-name selfRef">AID (Autonomic IDentifier) Fields</a>
        </h3>
<p id="section-5.6-1">Some fields, such as the <code>i</code> and <code>di</code> fields, <span class="bcp14">MUST</span> each have an AID (Autonomic IDentifier) as its value. An AID is a fully qualified Self-Certifying IDentifier (SCID) as described above <span>[<a href="#KERI" class="xref">KERI</a>]</span><span>[<a href="#KERI-ID" class="xref">KERI-ID</a>]</span>. An AID <span class="bcp14">MUST</span> be self-certifying.
In this context, <code>i</code> is short for <code>ai</code>, which is short for the Autonomic IDentifier (AID). The AID given by the <code>i</code> field may also be thought of as a securely attributable identifier, authoritative identifier, authenticatable identifier, authorizing identifier, or authoring identifier.Another way of thinking about an <code>i</code> field is that it is the identifier of the authoritative entity to which a statement may be securely attributed, thereby making the statement verifiably authentic via a non-repudiable signature made by that authoritative entity as the Controller of the private key(s).<a href="#section-5.6-1" class="pilcrow">¶</a></p>
<div id="namespaced-aids">
<section id="section-5.6.1">
          <h4 id="name-namespaced-aids">
<a href="#section-5.6.1" class="section-number selfRef">5.6.1. </a><a href="#name-namespaced-aids" class="section-name selfRef">Namespaced AIDs</a>
          </h4>
<p id="section-5.6.1-1">Because KERI is agnostic about the namespace for any particular AID, different namespace standards may be used to express KERI AIDs within AID fields in an ACDC. The examples below use the W3C DID namespace specification with the <code>did:keri</code> method <span>[<a href="#DIDK-ID" class="xref">DIDK-ID</a>]</span>. But the examples would have the same validity from a KERI perspective if some other supported namespace was used or no namespace was used at all. The latter case consists of a bare KERI AID (identifier prefix).<a href="#section-5.6.1-1" class="pilcrow">¶</a></p>
<p id="section-5.6.1-2">ToDo Explain agnosticism vis a vis namespaces
 Because AIDs may be namespaced, the essential component of an AID is the cryptographically derived Controller identifier prefix.  An AID <span class="bcp14">MUST</span> be the Controller identifier prefix.  part of a W3C Decentralized IDentifier (DID) <span>[<a href="#W3C_DID" class="xref">W3C_DID</a>]</span> or other namespace convention.<a href="#section-5.6.1-2" class="pilcrow">¶</a></p>
<p id="section-5.6.1-3">Version string namespaces the AIDs as KERI so don't need any namespacing on a per identifier basis.<a href="#section-5.6.1-3" class="pilcrow">¶</a></p>
</section>
</div>
</section>
</div>
<div id="version-string-field-1">
<section id="section-5.7">
        <h3 id="name-version-string-field-2">
<a href="#section-5.7" class="section-number selfRef">5.7. </a><a href="#name-version-string-field-2" class="section-name selfRef">Version String Field</a>
        </h3>
<p id="section-5.7-1">Get from ACDC<a href="#section-5.7-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="next-threshold-field">
<section id="section-5.8">
        <h3 id="name-next-threshold-field">
<a href="#section-5.8" class="section-number selfRef">5.8. </a><a href="#name-next-threshold-field" class="section-name selfRef">Next Threshold Field</a>
        </h3>
<p id="section-5.8-1">The <code>nt</code> field is next threshold for the next establishment event.<a href="#section-5.8-1" class="pilcrow">¶</a></p>
</section>
</div>
<div id="common-normalized-acdc-and-keri-labels">
<section id="section-5.9">
        <h3 id="name-common-normalized-acdc-and-">
<a href="#section-5.9" class="section-number selfRef">5.9. </a><a href="#name-common-normalized-acdc-and-" class="section-name selfRef">Common Normalized ACDC and KERI Labels</a>
        </h3>
<p id="section-5.9-1"><code>v</code> is the version string
<code>d</code> is the SAID of the enclosing block or map
<code>i</code> is a KERI identifier AID
<code>a</code> is the data attributes or data anchors depending on the message type<a href="#section-5.9-1" class="pilcrow">¶</a></p>
</section>
</div>
</section>
</div>
<div id="seals">
<section id="section-6">
      <h2 id="name-seals">
<a href="#section-6" class="section-number selfRef">6. </a><a href="#name-seals" class="section-name selfRef">Seals</a>
      </h2>
<div id="digest-seal">
<section id="section-6.1">
        <h3 id="name-digest-seal">
<a href="#section-6.1" class="section-number selfRef">6.1. </a><a href="#name-digest-seal" class="section-name selfRef">Digest Seal</a>
        </h3>
<div id="section-6.1-1">
<pre class="lang-json sourcecode">
    `id : dEabcde` 
</pre><a href="#section-6.1-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="merkle-tree-root-digest-seal">
<section id="section-6.2">
        <h3 id="name-merkle-tree-root-digest-sea">
<a href="#section-6.2" class="section-number selfRef">6.2. </a><a href="#name-merkle-tree-root-digest-sea" class="section-name selfRef">Merkle Tree Root Digest Seal</a>
        </h3>
<div id="section-6.2-1">
<pre class="lang-json sourcecode">

rd : Eabcde8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM`

</pre><a href="#section-6.2-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="backer-seal">
<section id="section-6.3">
        <h3 id="name-backer-seal">
<a href="#section-6.3" class="section-number selfRef">6.3. </a><a href="#name-backer-seal" class="section-name selfRef">Backer Seal</a>
        </h3>
<div id="section-6.3-1">
<pre class="lang-json sourcecode">

"bi": "BACDEFG8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",
"d" : "EFGKDDA8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM"

</pre><a href="#section-6.3-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="event-seal">
<section id="section-6.4">
        <h3 id="name-event-seal">
<a href="#section-6.4" class="section-number selfRef">6.4. </a><a href="#name-event-seal" class="section-name selfRef">Event Seal</a>
        </h3>
<div id="section-6.4-1">
<pre class="lang-json sourcecode">

"i": "Ebietyi8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM.",
"s": "3",
"d" : "Eabcde8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM"

</pre><a href="#section-6.4-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="last-establishment-event-seal">
<section id="section-6.5">
        <h3 id="name-last-establishment-event-se">
<a href="#section-6.5" class="section-number selfRef">6.5. </a><a href="#name-last-establishment-event-se" class="section-name selfRef">Last Establishment Event Seal</a>
        </h3>
<div id="section-6.5-1">
<pre class="lang-json sourcecode">
  "i": "BACDEFG8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",
</pre><a href="#section-6.5-1" class="pilcrow">¶</a>
</div>
</section>
</div>
</section>
</div>
<div id="key-event-messages-non-delegated">
<section id="section-7">
      <h2 id="name-key-event-messages-non-dele">
<a href="#section-7" class="section-number selfRef">7. </a><a href="#name-key-event-messages-non-dele" class="section-name selfRef">Key Event Messages (Non-delegated)</a>
      </h2>
<p id="section-7-1">Because adding the <code>d</code> field SAID to every key event message type will break all the explicit test vectors. Its no additional pain to normalize the field ordering across all message types and seals.
Originally all messages included an <code>i</code> field but that is not true anymore. So the changed field ordering is to put the fields that are common to all message types first in order followed by fields that are not common. The common fields are <code>v</code>, <code>t</code>, <code>d</code>.
The newly revised messages and seals are shown below.<a href="#section-7-1" class="pilcrow">¶</a></p>
<div id="inception-event">
<section id="section-7.1">
        <h3 id="name-inception-event">
<a href="#section-7.1" class="section-number selfRef">7.1. </a><a href="#name-inception-event" class="section-name selfRef">Inception Event</a>
        </h3>
<p id="section-7.1-1">When the AID in the <code>i</code> field is a self-addressing self-certifying AID, the new Inception Event has two
qualified digest fields. In this case both the <code>d</code> and <code>i</code> fields must have the same value. This means the digest suite's derivation code, used for the <code>i</code> field must be the same for the <code>d</code> field.
The derivation of the <code>d</code> and <code>i</code> fields is special. Both the <code>d</code> and <code>i</code> fields are replaced with dummy <code>#</code> characters of the length of the digest to be used. The digest of the Inception event is then computed and both the <code>d</code> and <code>i</code> fields are replaced with the qualified digest value. Validation of an inception event requires examining the <code>i</code> field's derivation code and if it is a digest-type then the <code>d</code> field must be identical otherwise the inception event is invalid.<a href="#section-7.1-1" class="pilcrow">¶</a></p>
<p id="section-7.1-2">When the AID is not self-addressing, i.e. the <code>i</code> field derivation code is not a digest. Then the <code>i</code> is given its value and the <code>d</code> field is replaced with dummy characters <code>#</code> of the correct length and then the digest is computed. This is the standard SAID algorithm.<a href="#section-7.1-2" class="pilcrow">¶</a></p>
</section>
</div>
<div id="inception-event-message-body">
<section id="section-7.2">
        <h3 id="name-inception-event-message-bod">
<a href="#section-7.2" class="section-number selfRef">7.2. </a><a href="#name-inception-event-message-bod" class="section-name selfRef">Inception Event Message Body</a>
        </h3>
<div id="section-7.2-1">
<pre class="lang-json sourcecode">
```
  "v": "KERI10JSON0001ac_",
  "t": "icp",
  "d": "EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug",
  "i": "EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug",
  "s": "0",
  "kt": "2", // 2 of 3
  "k" :
    [
      "DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b",
      "DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b",
      "Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM"
    ],
  "nt": "3",  // 3 of 5
  "n" :
    [
      "ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM",
      "EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS",
      "EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM",
      "ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk",
      "EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh",
    ],
  "bt": "2",
  "b":
    [
      "BGKVzj4ve0VSd8z_AmvhLg4lqcC_9WYX90k03q-R_Ydo",
      "BuyRFMideczFZoapylLIyCjSdhtqVb31wZkRKvPfNqkw",
      "Bgoq68HCmYNUDgOz4Skvlu306o_NY-NrYuKAVhk3Zh9c"
    ],
  "c": [],
  "a": []

</pre><a href="#section-7.2-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="rotation-event-message-body">
<section id="section-7.3">
        <h3 id="name-rotation-event-message-body">
<a href="#section-7.3" class="section-number selfRef">7.3. </a><a href="#name-rotation-event-message-body" class="section-name selfRef">Rotation Event Message Body</a>
        </h3>
<div id="section-7.3-1">
<pre class="lang-json sourcecode">

"v" : "KERI10JSON00011c\_",
"t" : "rot",
"d" : "E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM",
"i" : "EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM",
"s" : "1",
"p" : "EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM",
"kt": "2", // 2 of 3
"k" :
[
"DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b",
"DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b",
"Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM"
],
"nt": "3", // 3 of 5
"n" :
[
"ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM",
"EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS",
"EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM",
"ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk",
"EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh",
],
"bt": "1",
"ba": ["DTNZH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8JZAo5CM"],
"br": ["DH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8TNZJZAo5CM"],
"a" : []

</pre><a href="#section-7.3-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="interaction-event-message-body">
<section id="section-7.4">
        <h3 id="name-interaction-event-message-b">
<a href="#section-7.4" class="section-number selfRef">7.4. </a><a href="#name-interaction-event-message-b" class="section-name selfRef">Interaction Event Message Body</a>
        </h3>
<div id="section-7.4-1">
<pre class="lang-json sourcecode">

"v": "KERI10JSON00011c\_",
"t": "isn",
"d": "E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM",
"i": "EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM",
"s": "2",
"p": "EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM",
"a":
[

      "d": "ELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM",
      "i": "EJJR2nmwyYAfSVPzhzS6b5CMZAoTNZH3ULvaU6Z-i0d8",
      "s": "1"

]

</pre><a href="#section-7.4-1" class="pilcrow">¶</a>
</div>
</section>
</div>
</section>
</div>
<div id="delegated-key-event-messages">
<section id="section-8">
      <h2 id="name-delegated-key-event-message">
<a href="#section-8" class="section-number selfRef">8. </a><a href="#name-delegated-key-event-message" class="section-name selfRef">Delegated Key Event Messages</a>
      </h2>
<p id="section-8-1">ToDo in delegation section below. Delegated custodial example with partial rotation and using 0 fraction signing weights on exposed pre-rotated keys<a href="#section-8-1" class="pilcrow">¶</a></p>
<div id="delegated-inception-event-message-body">
<section id="section-8.1">
        <h3 id="name-delegated-inception-event-m">
<a href="#section-8.1" class="section-number selfRef">8.1. </a><a href="#name-delegated-inception-event-m" class="section-name selfRef">Delegated Inception Event Message Body</a>
        </h3>
<div id="section-8.1-1">
<pre class="lang-json sourcecode">

"v": "KERI10JSON0001ac\_",
"t": "icp",
"d": "EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug",
"i": "EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug",
"s": "0",
"kt": "2", // 2 of 3
"k" :
[
"DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b",
"DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b",
"Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM"
],
"nt": "3", // 3 of 5
"n" :
[
"ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM",
"EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS",
"EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM",
"ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk",
"EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh",
],
"bt": "2",
"b":
[
"BGKVzj4ve0VSd8z_AmvhLg4lqcC_9WYX90k03q-R_Ydo",
"BuyRFMideczFZoapylLIyCjSdhtqVb31wZkRKvPfNqkw",
"Bgoq68HCmYNUDgOz4Skvlu306o_NY-NrYuKAVhk3Zh9c"
],
"c": [],
"a": [],
"di": "EJJR2nmwyYAZAoTNZH3ULvaU6Z-i0d8fSVPzhzS6b5CM"

</pre><a href="#section-8.1-1" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="delegated-rotation-event-message-body">
<section id="section-8.2">
        <h3 id="name-delegated-rotation-event-me">
<a href="#section-8.2" class="section-number selfRef">8.2. </a><a href="#name-delegated-rotation-event-me" class="section-name selfRef">Delegated Rotation Event Message Body</a>
        </h3>
<div id="section-8.2-1">
<pre class="lang-json sourcecode">

"v" : "KERI10JSON00011c\_",
"t" : "drt",
"d" : "E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM",
"i" : "EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM",
"s" : "1",
"p" : "EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM",
"kt": "2", // 2 of 3
"k" :
[
"DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b",
"DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b",
"Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM"
],
"nt": "3", // 3 of 5
"n" :
[
"ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM",
"EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS",
"EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM",
"ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk",
"EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh",
],
"bt": "1",
"ba": ["DTNZH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8JZAo5CM"],
"br": ["DH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8TNZJZAo5CM"],
"a" :[]
"di" : "EJJR2nmwyYAZAoTNZH3ULvaU6Z-i0d8fSVPzhzS6b5CM"

</pre><a href="#section-8.2-1" class="pilcrow">¶</a>
</div>
</section>
</div>
</section>
</div>
<div id="receipt-messages">
<section id="section-9">
      <h2 id="name-receipt-messages">
<a href="#section-9" class="section-number selfRef">9. </a><a href="#name-receipt-messages" class="section-name selfRef">Receipt Messages</a>
      </h2>
<div id="non-transferable-prefix-signer-receipt-message-body">
<section id="section-9.1">
        <h3 id="name-non-transferable-prefix-sig">
<a href="#section-9.1" class="section-number selfRef">9.1. </a><a href="#name-non-transferable-prefix-sig" class="section-name selfRef">Non-Transferable Prefix Signer Receipt Message Body</a>
        </h3>
<p id="section-9.1-1">For receipts, the <code>d</code> field is the SAID of the associated event, not the receipt message itself.<a href="#section-9.1-1" class="pilcrow">¶</a></p>
<div id="section-9.1-2">
<pre class="lang-json sourcecode">

"v": "KERI10JSON00011c\_",
"t": "rct",
"d": "DZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",
"i": "AaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM",
"s": "1"

</pre><a href="#section-9.1-2" class="pilcrow">¶</a>
</div>
</section>
</div>
<div id="transferable-prefix-signer-receipt-message-body">
<section id="section-9.2">
        <h3 id="name-transferable-prefix-signer-">
<a href="#section-9.2" class="section-number selfRef">9.2. </a><a href="#name-transferable-prefix-signer-" class="section-name selfRef">Transferable Prefix Signer Receipt Message Body</a>
        </h3>
<p id="section-9.2-1">For receipts, the <code>d</code> field is the SAID of the associated event, not the receipt message itself.<a href="#section-9.2-1" class="pilcrow">¶</a></p>
<div id="section-9.2-2">
<pre class="lang-json sourcecode">

"v": "KERI10JSON00011c\_",
"t": "vrc",
"d": "DZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",
"i": "AaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM",
"s": "1",
"a":

      "d": "DZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",
      "i": "AYAfSVPzhzS6b5CMaU6JR2nmwyZ-i0d8JZAoTNZH3ULv",
      "s": "4"

</pre><a href="#section-9.2-2" class="pilcrow">¶</a>
</div>
</section>
</div>
</section>
</div>
<div id="other-messages">
<section id="section-10">
      <h2 id="name-other-messages">
<a href="#section-10" class="section-number selfRef">10. </a><a href="#name-other-messages" class="section-name selfRef">Other Messages</a>
      </h2>
<div id="query-message-message-body">
<section id="section-10.1">
        <h3 id="name-query-message-message-body">
<a href="#section-10.1" class="section-number selfRef">10.1. </a><a href="#name-query-message-message-body" class="section-name selfRef">Query Message Message Body</a>
        </h3>

</section>
</div>

</body>
