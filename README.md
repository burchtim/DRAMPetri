# Modeling of DRAMs with Petri Nets

The functionality of DRAMs, especially the state transitions are described in JEDEC standards. These standards contain a finite state machine, which intends to provide an overview of the possible state transitions and the commands to control them. However, today’s DRAMs are highly concurrent devices as they provide bank parallelism. The state diagram used in JEDEC standards does not model this concurrency and furthermore it is misleading in several aspects. In this paper, for the first time we present an easily comprehensive model of the DRAM states and transitions, using a Petri Net, which covers also the DRAM concurrency.

## Paper

**A New State Model for DRAMs Using Petri Nets ([Link](http://samos-conference.com/Resources_Samos_Websites/Proceedings_Repository_SAMOS/2017/Files/Paper_27.pdf))**
M. Jung, K. Kraft, N. Wehn. *IEEE International Conference on Embedded Computer Systems Architectures Modeling and Simulation (SAMOS)*, July, 2017, Samos Island, Greece.

## Executable Model

In order to run the executable model click [here](https://tukl-msd.github.io/DRAMPetri/web/) or open the index.html file in the web folder after cloning the repository.

## Playground with pflow Files

In order to explore different architectures the [PNEditor](http://www.pneditor.org) (version >=0.71) can be used. The files for the PNEditor are stored in the pflow folder.
