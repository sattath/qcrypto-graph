// relations

var primitives = [];
var problems = [];
var implications = [];
var separations = [];

var PRIM = function(id, title) {
  primitives.push({id: id, title: title});
};

var PROB = function(id, title) {
  problems.push({id: id, title: title});
};

var IMPLIES = function(from, to, refid) {
  implications.push({from: from, to: to, refid: refid});
};

var EQUALS = function(from, to, refid) {
  IMPLIES(from, to, refid);
  IMPLIES(to, from, refid);
};

var BBSEP = function(from, to, refid) {
  separations.push({from: from, to: to, refid: refid});
};

// nodes (primitives & problems)
//tbi include definitions of these primitives on the web page

// computational problems
// PROB('FACTOR', 'Factoring');
// PROB('RSA', 'Rivest Shamir Adleman');
// PROB('DLOG', 'Discrete Logarithm');
// PROB('CDH', 'Computational Diffie Hellmann');
// PROB('DDH', 'Decisional Diffie Hellmann');
// // PROB('HSP', 'Hidden Subgroup Problem');
// PROB('SVP', 'Shortest Vector Problem');
// PROB('LWE', 'Learning with Errors');

// var nodeIds = nodes_all.getIds();
// for (id in nodeIds) {
//   nodes_all.update({id: nodeIds[id], fixed: true, x: id * 10, y: id * 60,});
//   if (id > 1) break;
// }

// primitives
// PRIM('OWP','One-Way Permutation');
// PRIM('TDP', 'Trapdoor Permutation');
// PRIM('OWF', 'One-Way Function');
// PRIM('PRNG', 'Pseudo-Random Number Generator');
// PRIM('PRF', 'Pseudo-Random Function');
// PRIM('PRP', 'Pseudo-Random Permutation');
// PRIM('CRHF', 'Collision-Resistant Hash Function');
// PRIM('COM', 'Commitment');
// PRIM('NI-COM', 'Non-Interactive Commitment');
// PRIM('SH-COM', 'Statistically-Hiding Commitment');
// PRIM('HE', 'Homomorphic Encryption');
// PRIM('SKE', 'Secret-Key Encryption');
// PRIM('PKE', 'Public-Key Encryption');
//PRIM('CCA-PKE', 'Chosen Ciphertext Attack Secure Public-Key Encryption');
// PRIM('OT', 'Oblivious Transfer');
// //PRIM('IO', 'Indisitinguishability Obfuscation');
// PRIM('CFP', 'Claw-Free Permutation');
// PRIM('CF-TDP', 'Claw-Free Trapdoor Permutation');
// PRIM('CPA-SIG', 'Chosen Plaintext Attack Secure Digital Signature');
// PRIM('EB-COM', 'Extractable-Binding Commitment');
// PRIM('CB-COM', 'Collapse-Binding Commitment');
// PRIM('ECRH', 'Extractable Collision-Resistant Hash Function');
// PRIM('PIR', 'Private Information Retrieval');
// PRIM('LTDF', 'Lossy Trapdoor Function');
// PRIM('ITDF', 'Injective Trapdoor Function');
// PRIM('TDF', 'Trapdoor Function');
// PRIM('KA', 'Key Agreement');
PRIM('OWF', 'One-Way Function');


// PRS Variants
PRIM('PRS','Pseduorandom States with superlogarithmic outputs size')
PRIM('1PRS','Single-copy PRS, with m>(1+epsilon)n, for some fixed epsilon, for key-length n and output size m.')

PRIM('PRSPD','Pseduorandom States with Proofs of Destruction')
PRIM('PRSNPD','Pseduorandom States with Nice Proofs of Destruction')
PRIM('Short Input PRFS', 'Short Input Pseudorandom Function-like States with selective security. The input size needs to be Theta(log(n)) qubits.')
PRIM('Long Input PRFS', 'Long Input Pseudorandom Function-like States. The input size needs to be omega(log(n)) qubits.')
//PRIM('Short Input PRFSPD', 'Short Input Pseudorandom Function-like States with Proofs of Destruction')
PRIM('PRFSPD', 'Long Input Pseudorandom Function-like States with Proofs of Destruction')
PRIM('Short Output PRS','Short Output Pseduorandom States. The output state needs to have c*log(n)) qubits for some large enough c.')
PRIM('Short Output PRFS',"Short Output Pseduorandom Function-Like States. The output state needs to have Theta(log(n)) qubits.")
PRIM('OWSG','(Mixed) One-way States Generator') //The result by Khurana-Tomer require pure states
PRIM('Pure OWSG','Pure One-way States Generator') //The result by Khurana-Tomer require pure states
PRIM('EFI','efficiently samplable, statistically far but computationally indistinguishable pairs of mixed quantum states')
PRIM('PD-PRG','Pseudodeterministic Quantum Pseudorandom Generator')
PRIM('PD-PRF','Pseudodeterministic Quantum Pseudorandom Function')
PRIM('PD-OWF','Pseudodeterministic Quantum One-Way Function')

PRIM('Non-adaptive PRU','Non-adaptive Long Input Pseduorandom Unitaries')

PRIM('⊥-PRG','⊥-PRG (a quantum PRG with a recognizable abort)')
PRIM('⊥-PRF','⊥-PRF (a quantum PRF with a recognizable abort)')

PRIM('One-Way Puzzle','One-Way Puzzle')
// Quantum Applications
PRIM('Private Quantunm Coins','Private Quantum Coins')
PRIM('Almost Public Quantunm Coins','Almost Public Quantum Coins')
// Quantum Applications with classical communication
PRIM('Classically Verifiable Private Quantum Coins','Classically Verifiable Private Quantum Coins')
PRIM('Tamper Proof QPKE','Tamper Proof CPA PKE with quantum public keys and classical ciphers')
// Classical Applications with Quantum Communication
//PRIM('CCA-qPKE','CCA Encryption (without Encryption Oracle) with Quantum Pulbic-Keys')
PRIM('CCA1-EO-qPKE','Reusable CCA1 Encryption Scheme with Quantum Pulbic-Keys and Classical Ciphers')
PRIM('CCA1-qPKE with quantum ciphers','Non-reusable CCA1 Encryption Scheme with Quantum Pulbic-Keys and Quantum Ciphers')
PRIM('SB-QCOM','Computationally Hiding Statictically Binding Quantum Bit Commitments')
PRIM('NI-SB-QCOM','Non-Interactive Computationally Hiding Statictically Binding Quantum Bit Commitments')
PRIM('NI-SH-QCOM','Non-Interactive Statistically Hiding Computationally Binding Quantum Bit Commitments')

PRIM('OTS with Quantum Public Keys','One-time Signatures with Quantum Public Keys')
PRIM('QMPC','Quantum MPC for P/poly with Dishonest Majority')
PRIM('Quanum Pseudo-encryption','Pseduo-encryption With Quantum Ciphers')
PRIM('Pseudo-encryption','Pseduo-encryption with Classical Ciphers')
PRIM('QSKE','Selective CPA Symmetric Encryption with Quantum Ciphers')

PRIM('Quantum Garbled Circuits','Quantum Garbled Circuits for P/poly')
PRIM('MAC with Quantum Tags','Reusable (Non-CMA) Length Restriged MAC with Quantum Tags')

//Applications with classical communication
PRIM('CCA2 Sym. Encryption w. Classical Ciphers','CCA2 Symmetric Encryption with Classical Ciphers')
PRIM('MAC','Length Restricted CMA MAC with Classical Tags')
PRIM('Imperfect MAC','Imperfect CMA MAC with Classical Tags')
PRIM('SB-COM','Statictically Binding Computationally Hiding Bit Commitments with Classical Communication')
PRIM('Garbled Circuits','Classical Garbled Circuits for P/poly')
PRIM('OTS','One-time Signature with a Classical Pulbic-Key')
PRIM('NA-CPA Sym. Encryption w. Classical Ciphers','Non-adaptive CPA Symmetric Encryption with Classical Ciphers')
PRIM('SIG','Chosen Plaintext Attack Secure Digital Signature with imperfect completeness')

// PRIM('','')
// PRIM('','')
// PRIM('','')
// PRIM('','')

// relations of primitives

IMPLIES('OWF','PRS','JLS18')
IMPLIES('OWF','Long Input PRFS','AQY22')

IMPLIES('OWF', 'Non-adaptive PRU','MPSY24')
IMPLIES('Non-adaptive PRU','Long Input PRFS','TRV')

IMPLIES('Long Input PRFS','PRS','TRV')



IMPLIES('PRS','Private Quantunm Coins','JLS18')
IMPLIES('Private Quantunm Coins','Almost Public Quantunm Coins','BS20')
IMPLIES('Private Quantunm Coins','Pure OWSG','MY22b')
IMPLIES('Quanum Pseudo-encryption','OWSG','MY22b')
IMPLIES('Quanum Pseudo-encryption','EFI','MY22b')
IMPLIES('Pure OWSG','OWSG','KT23')

IMPLIES('PRS','Short Input PRFS','AQY22')
IMPLIES('Short Input PRFS','PRS','TRV')
IMPLIES('OWF', 'Short Output PRS','BS20b')
IMPLIES('OWF','Short Output PRFS','AGQY22')
IMPLIES('Short Output PRFS','Short Output PRS','TRV')

IMPLIES('Short Output PRS','PD-PRG','ALY23')
IMPLIES('Short Output PRFS','PD-PRF','ALY23')

IMPLIES('Short Input PRFS','SB-QCOM','AQY22')
IMPLIES('SB-COM','SB-QCOM','TRV')
EQUALS('OWSG' ,'OTS with Quantum Public Keys','MY22b')
EQUALS('SB-QCOM' ,'EFI','BCQ23')
EQUALS('QMPC' ,'EFI','BCQ23')
IMPLIES('Short Input PRFS','Quanum Pseudo-encryption','AQY22')
IMPLIES('Quanum Pseudo-encryption','Quantum Garbled Circuits' ,'AQY22')
IMPLIES('Short Output PRS','SB-COM','AGQY22')
IMPLIES('Long Input PRFS','QSKE','AQY22')
IMPLIES('QSKE','Quanum Pseudo-encryption','TRV')
IMPLIES('SB-QCOM','QMPC','MY22a') // Proved independently in AQY22. Both results rely upon BCKM17.
IMPLIES('Long Input PRFS','MAC with Quantum Tags','AQY22')
IMPLIES('Long Input PRFS' ,'CCA1-qPKE with quantum ciphers','BGH+23')
IMPLIES('OWF','1PRS','MY22a') // Remark 2.4: a PRG is a 1PRS. Although, there are other ways to achieve that as well. Basically, construct a "vanilla" PRS with a long output.
IMPLIES('PRS','1PRS','GJMZ23') // Theorem C.2

IMPLIES('1PRS','NI-SB-QCOM','MY22a')
EQUALS('NI-SB-QCOM', 'NI-SH-QCOM', 'HMY23');
IMPLIES('NI-SB-QCOM','SB-QCOM','TRV')
IMPLIES('SB-QCOM','NI-SB-QCOM','Yan22')


// PD-PRG, PD-PRF, ⊥-PRG and ⊥-PRF  applications:
IMPLIES('PD-PRG','SB-COM','ALY23')
IMPLIES('PD-PRG','Pseudo-encryption','ALY23')
IMPLIES('PD-PRF','NA-CPA Sym. Encryption w. Classical Ciphers','ALY23')
IMPLIES('PD-PRF','PD-PRG','TRV')
IMPLIES('PD-PRG','PD-OWF','BBO+24')
IMPLIES('PD-PRG','⊥-PRG','BBO+24')
IMPLIES('⊥-PRG','⊥-PRF','BBO+24')
IMPLIES('⊥-PRF','SIG','BBO+24')
IMPLIES('SIG','OTS','TRV')
IMPLIES('⊥-PRF','Imperfect MAC','BBO+24')
IMPLIES('⊥-PRF','Tamper Proof QPKE','BBO+24')

// One-Way Puzzles
IMPLIES('Pure OWSG','One-Way Puzzle','KT23')
IMPLIES('One-Way Puzzle','EFI','KT23') //Requires several steps not shown, see the statement below Theorem 8.3
IMPLIES('Pseudo-encryption','One-Way Puzzle','KT23')
IMPLIES('OTS','One-Way Puzzle','KT23')
//IMPLIES('OWF','CCA-qPKE','BMW23') (Subsumed )

//PRSPD related:
//--------------
IMPLIES('OWF','PRSNPD','BBSS23')
IMPLIES('OWF','PRFSPD','BBSS23')

IMPLIES('PRSNPD','PRSPD','TRV')
IMPLIES('PRFSPD','PRSPD','TRV')

IMPLIES('PRFSPD','CCA2 Sym. Encryption w. Classical Ciphers','BBSS23')
IMPLIES('PRFSPD','MAC','BBSS23')
IMPLIES('PRSNPD','SB-COM','BBSS23')
IMPLIES('CCA2 Sym. Encryption w. Classical Ciphers','Pseudo-encryption','BBSS23')
IMPLIES('PRSPD','Classically Verifiable Private Quantum Coins','BBSS23')
IMPLIES('PRSPD','OTS','BBSS23') 
IMPLIES('PRFSPD' ,'CCA1-EO-qPKE','BGH+23')

//Classical Implications:
IMPLIES('Classically Verifiable Private Quantum Coins','Private Quantunm Coins','TRV')
IMPLIES('Short Output PRFS','Pseudo-encryption','AGQY22')
IMPLIES('Pseudo-encryption','Garbled Circuits','BBSS23')
IMPLIES('MAC','MAC with Quantum Tags','TRV')
IMPLIES('MAC','Imperfect MAC','TRV')
IMPLIES('Pseudo-encryption','Quanum Pseudo-encryption','TRV')
IMPLIES('CCA2 Sym. Encryption w. Classical Ciphers','QSKE','TRV')
IMPLIES('Garbled Circuits','Quantum Garbled Circuits','TRV')
IMPLIES('OTS','OTS with Quantum Public Keys','TRV')

//STILL MISSING: Relation QPKE


// separations
BBSEP('PRS','OWF',  'Kre21');
BBSEP('Long Input PRFS', 'OWF', 'Kre21');
BBSEP('Non-adaptive PRU','OWF','Kre21');
BBSEP('PD-OWF','PRS','BM24')
BBSEP('SIG','PRS','CM24')
BBSEP('PRS','Short Output PRS','CCS24')
// relations of primitives
// EQUALS('OWF', 'PRNG', 'hastad1999pseudorandom');
// BBSEP('OWF', 'OWP', 'rudich1984limits');
// BBSEP('OWP', 'KA', 'impagliazzo1989limits');
// BBSEP('OWF', 'NI-COM', 'mahmoody2012curious');
// EQUALS('OWF', 'CPA-SIG', 'rompel1990oneway');
// IMPLIES('OWF', 'SH-COM', 'haitner2007statistically');
// IMPLIES('OWF', 'PRF', 'goldreich1986construct');
// BBSEP('OWP', 'CRHF', 'simon1998finding');
// IMPLIES('OWP', 'NI-COM', 'mahmoody2012curious');
// IMPLIES('OWP', 'OWF');
// // IMPLIES('OWP', 'PRNG', 'yao1982theory');
// IMPLIES('OWP', 'CPA-SIG', 'naor1989universal');
// IMPLIES('CRHF', 'NI-COM', 'halevi1996practical');
// IMPLIES('HE', 'CRHF', 'ishai2005sufficient');
// IMPLIES('HE', 'PIR', 'ishai2005sufficient');
// IMPLIES('PIR', 'CRHF', 'ishai2005sufficient');
// IMPLIES('PIR', 'OT', 'crescenzo2000single');
// IMPLIES('TDP', 'OWP');
// IMPLIES('TDP', 'PKE', 'yao1982theory');
// IMPLIES('TDP', 'OT');
// IMPLIES('TDP', 'KA', 'impagliazzo1989limits');
// IMPLIES('TDP', 'CPA-SIG', 'bellare1992sign');
// IMPLIES('TDP', 'TDF');
// IMPLIES('TDF', 'OWF');
// IMPLIES('PRNG', 'PRF');
// IMPLIES('PRNG', 'COM', 'naor1991bitcommitment');
// IMPLIES('CFP', 'CRHF', 'damgard1987collision');
// IMPLIES('CFP', 'CPA-SIG', 'goldwasser1988digital');
// IMPLIES('SKE', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('PKE', 'KA', 'impagliazzo1989limits');
// IMPLIES('PKE', 'SKE');
// IMPLIES('PRF', 'PRP', 'luby1988construct');
// IMPLIES('PRF', 'SKE', 'goldwasser2008lecture');
// IMPLIES('COM', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('SH-COM', 'COM');
// IMPLIES('EB-COM', 'NI-COM');
// IMPLIES('CB-COM', 'NI-COM');
// IMPLIES('ECRH', 'EB-COM');
// IMPLIES('ECRH', 'CRHF');
// IMPLIES('NI-COM', 'COM');
// IMPLIES('LTDF', 'ITDF', 'peikert2008lossy');
// IMPLIES('LTDF', 'CRHF', 'peikert2008lossy');
// IMPLIES('LTDF', 'OT', 'peikert2008lossy');
// IMPLIES('LTDF', 'PKE', 'peikert2008lossy');
// IMPLIES('LTDF', 'CB-COM', 'unruh2016collapse');
// IMPLIES('LTDF', 'TDF');
// IMPLIES('ITDF', 'TDF');
// IMPLIES('OT', 'KA', 'impagliazzo1989limits');
// IMPLIES('ITDF', 'TDF'); //don't have the notion of trapdoor functions yet

// relations of problems
// IMPLIES('DLOG', 'PRNG', 'blum1984generate');
// IMPLIES('DLOG', 'CFP', 'damgard1987collision');
// IMPLIES('DDH', 'LTDF', 'peikert2008lossy');
// IMPLIES('DDH', 'DLOG');
// IMPLIES('CDH', 'DDH');
// IMPLIES('FACTOR', 'PRNG');
// IMPLIES('FACTOR', 'CFP', 'goldwasser1988digital');
// IMPLIES('FACTOR', 'CF-TDP', 'goldwasser1988digital');
// IMPLIES('RSA', 'FACTOR');
// IMPLIES('RSA', 'TDP', 'rivest1978method');
// IMPLIES('RSA', 'CF-TDP', 'katz2010digital');
// IMPLIES('RSA', 'CPA-SIG', 'hohenberger2009short');
// IMPLIES('CF-TDP', 'TDP');
// IMPLIES('CF-TDP', 'CFP');
// IMPLIES('SVP', 'CRHF', 'goldreich2011collision');
// IMPLIES('SVP', 'OWF', 'ajtai1996generating');
// IMPLIES('SVP', 'LWE', 'brakerski2013classical');
// IMPLIES('LWE', 'LTDF', 'peikert2008lossy');
