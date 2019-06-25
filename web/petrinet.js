// Matthias Jung

var blinker = 0;

var petriNet = {
  places: [
    { id: 0, name: "IDLE"   , tokens: 2},
    { id: 1, name: "BANK_0" , tokens: 0},
    { id: 2, name: "BANK_1" , tokens: 0},
    { id: 3, name: "PDNA"   , tokens: 0},
    { id: 4, name: "PDNP"   , tokens: 0},
    { id: 5, name: "SREF"   , tokens: 0},
  ],

  transitions: [
    { id:  6, name: "ACT_0"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id:  7, name: "ACT_1"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id:  8, name: "PREA"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id:  9, name: "REFA"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 10, name: "SREFEN"   , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 11, name: "PDE_PDNP" , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 12, name: "RD_0"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 13, name: "WR_0"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 14, name: "WRA_0"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 15, name: "RDA_0"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 16, name: "PRE_0"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 17, name: "RD_1"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 18, name: "WR_1"     , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 19, name: "WRA_1"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 20, name: "RDA_1"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 21, name: "PRE_1"    , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 22, name: "PDX_PDNA" , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 23, name: "PDX_PDNP" , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 24, name: "PDE_PDNA" , enabled: 0 , inhibited: 0, timedInhibited: 0  },
    { id: 25, name: "SREFEX"   , enabled: 0 , inhibited: 0, timedInhibited: 0  }
  ],

  arcs: [
	//// Invisible arcs connected to 'AIR':
    { source: -1, target: 24, type: "normal",    weight: 0 },  // PDE_PDNA
    { source: -1, target:  8, type: "normal",    weight: 0 },  // PREA 

	//// Normal arcs:
	// IDLE:
    { source:  0, target:  6, type: "normal",    weight: 1 },  // IDLE     -> ACT_0
    { source:  0, target:  7, type: "normal",    weight: 1 },  // IDLE     -> ACT_1

	// BANK_0:
    { source:  6, target:  1, type: "normal",    weight: 1 },  // ACT_0    -> BANK_0
    { source:  1, target: 12, type: "normal",    weight: 1 },  // BANK_0   -> RD_0
    { source: 12, target:  1, type: "normal",    weight: 1 },  // RD_0     -> BANK_0
    { source:  1, target: 13, type: "normal",    weight: 1 },  // BANK_0   -> WR_0
    { source: 13, target:  1, type: "normal",    weight: 1 },  // WR_0     -> BANK_0
    { source:  1, target: 16, type: "normal",    weight: 1 },  // BANK_0   -> PRE_0
    { source:  1, target: 15, type: "normal",    weight: 1 },  // BANK_0   -> RDA_0
    { source:  1, target: 14, type: "normal",    weight: 1 },  // BANK_0   -> WRA_0
    { source: 16, target:  0, type: "normal",    weight: 1 },  // PRE_0    -> IDLE
    { source: 15, target:  0, type: "normal",    weight: 1 },  // RDA_0    -> IDLE
    { source: 14, target:  0, type: "normal",    weight: 1 },  // WRA_0    -> IDLE

	// BANK_0:
    { source:  7, target:  2, type: "normal",    weight: 1 },  // ACT_1    -> BANK_1
    { source:  2, target: 17, type: "normal",    weight: 1 },  // BANK_1   -> RD_1
    { source: 17, target:  2, type: "normal",    weight: 1 },  // RD_1     -> BANK_1
    { source:  2, target: 18, type: "normal",    weight: 1 },  // BANK_1   -> WR_1
    { source: 18, target:  2, type: "normal",    weight: 1 },  // WR_1     -> BANK_1
    { source:  2, target: 21, type: "normal",    weight: 1 },  // BANK_1   -> PRE_1
    { source:  2, target: 20, type: "normal",    weight: 1 },  // BANK_1   -> RDA_1
    { source:  2, target: 19, type: "normal",    weight: 1 },  // BANK_1   -> WRA_1
    { source: 21, target:  0, type: "normal",    weight: 1 },  // PRE_1    -> IDLE
    { source: 20, target:  0, type: "normal",    weight: 1 },  // RDA_1    -> IDLE
    { source: 19, target:  0, type: "normal",    weight: 1 },  // WRA_1    -> IDLE

	// PREA:
    { source:  8, target:  0, type: "normal",    weight: 2 },  // PREA     -> IDLE

	// Refresh:
    { source:  0, target:  9, type: "normal",    weight: 2 },  // IDLE     -> REFA
    { source:  9, target:  0, type: "normal",    weight: 2 },  // REFA     -> IDLE

	// Powerdown:
    { source: 24, target:  3, type: "normal",    weight: 1 },  // PDE_PDNA -> PDNA
    { source:  3, target: 22, type: "normal",    weight: 1 },  // PDNA     -> PDX_PDNA

    { source:  0, target: 10, type: "normal",    weight: 2 },  // IDLE     -> SREFEN
    { source: 10, target:  5, type: "normal",    weight: 1 },  // SREFEN   -> SREF
    { source:  5, target: 25, type: "normal",    weight: 1 },  // SREF     -> SREFEX
    { source: 25, target:  0, type: "normal",    weight: 2 },  // SREFEX   -> IDLE

    { source:  0, target: 11, type: "normal",    weight: 2 },  // IDLE     -> PDE_PDNP
    { source: 11, target:  4, type: "normal",    weight: 1 },  // PDE_PDNP -> PDNP
    { source:  4, target: 23, type: "normal",    weight: 1 },  // PDNP     -> PDX_PDNP
    { source: 23, target:  0, type: "normal",    weight: 2 },  // PDX_PDNP -> IDLE

	//// Inhibitor Arcs:
	// BANK_0
    { source:  1, target:  6, type: "inhibitor", weight: 1 },  // BANK_0  -o ACT_0
    { source:  3, target:  6, type: "inhibitor", weight: 1 },  // PDNA    -o ACT_0
    { source:  3, target: 12, type: "inhibitor", weight: 1 },  // PDNA    -o RD_0
    { source:  3, target: 13, type: "inhibitor", weight: 1 },  // PDNA    -o WR_0
    { source:  3, target: 16, type: "inhibitor", weight: 1 },  // PDNA    -o PRE_0
    { source:  3, target: 14, type: "inhibitor", weight: 1 },  // PDNA    -o WRA_0
    { source:  3, target: 15, type: "inhibitor", weight: 1 },  // PDNA    -o RDA_0

	// BANK_1
    { source:  2, target:  7, type: "inhibitor", weight: 1 },  // BANK_1  -o ACT_1
    { source:  3, target:  7, type: "inhibitor", weight: 1 },  // PDNA    -o ACT_1
    { source:  3, target: 17, type: "inhibitor", weight: 1 },  // PDNA    -o RD_1
    { source:  3, target: 18, type: "inhibitor", weight: 1 },  // PDNA    -o WR_1
    { source:  3, target: 21, type: "inhibitor", weight: 1 },  // PDNA    -o PRE_1
    { source:  3, target: 19, type: "inhibitor", weight: 1 },  // PDNA    -o WRA_1
    { source:  3, target: 20, type: "inhibitor", weight: 1 },  // PDNA    -o RDA_1

	// PREA:
    { source:  3, target:  8, type: "inhibitor", weight: 1 },  // PDNA    -o PREA
    { source:  4, target:  8, type: "inhibitor", weight: 1 },  // PDNP    -o PREA
    { source:  5, target:  8, type: "inhibitor", weight: 1 },  // SREF    -o PREA

	// REFA:
    { source:  3, target:  9, type: "inhibitor", weight: 1 },  // PDNA    -o REFA

	// Powerdown
    { source:  3, target: 11, type: "inhibitor", weight: 1 },  // PDNA    -o PDE_PDNP
    { source:  3, target: 10, type: "inhibitor", weight: 1 },  // PDNA    -o SREFEN
    { source:  3, target: 24, type: "inhibitor", weight: 1 },  // PDNA    -o PDE_PDNA
    { source:  5, target: 24, type: "inhibitor", weight: 1 },  // SREF    -o PDE_PDNA
    { source:  4, target: 24, type: "inhibitor", weight: 1 },  // PDNP    -o PDE_PDNA
    { source:  0, target: 24, type: "inhibitor", weight: 2 },  // IDLE    -o PDE_PDNA

    //// Reset arcs:
    { source:  0, target:  8, type: "reset",     weight: 1 },  // IDLE    >> PREA
    { source:  1, target:  8, type: "reset",     weight: 1 },  // BANK_0  >> PREA
    { source:  2, target:  8, type: "reset",     weight: 1 },  // BANK_1  >> PREA
	
	//timed arcs:
	{ id: 0, source:  6, target:  7,  type: "timed", name: "tRRD", delay: 3000, age: -1},  // ACT_0    -<> ACT_1
	{ id: 1, source:  7, target:  6,  type: "timed", name: "tRRD", delay: 3000, age: -1},  // ACT_1    -<> ACT_0
	{ id: 2, source:  6, target:  12, type: "timed", name: "tRCD", delay: 5000, age: -1},  // ACT_0    -<> RD_0
	{ id: 3, source:  7, target:  17, type: "timed", name: "tRCD", delay: 5000, age: -1},  // ACT_1    -<> RD_1 
	{ id: 4, source:  12, target: 12, type: "timed", name: "tCCD", delay: 5000, age: -1},  // RD_0    -<> RD_0
 ]	
};

function fireTransition(node) {
	
	// Get Clicked Transition:
	var transition = petriNet.transitions.filter(function(d) {
		return d.name == node;
	})[0];
	
	//console.log(transition);

    if(transition.enabled == 1 && transition.inhibited == 0 && transition.timedInhibited == 0)
    {
        // Clear connected Places with reset arcs:
        petriNet.arcs.filter(function(d) { // Get all input arcs:
            return (d.target == transition.id) && (d.type == "reset");
        }).forEach(function(arc, i){ // Foreach input arc get the source place:
            var place = petriNet.places.filter(function(f) {
                return f.id == arc.source;
            })[0];
            place.tokens = 0;
        });
		
        // Clear connected input place:
        petriNet.arcs.filter(function(d) { // Get all input arcs:
            return (d.target == transition.id) && (d.type == "normal");
        }).forEach(function(arc, i){ // Foreach input arc get the source place:
            if(arc.source != -1)
            {
                var place = petriNet.places.filter(function(f) {
                    return f.id == arc.source;
                })[0];
                place.tokens -= arc.weight;
            }
        });

        // Set connected output place:
        petriNet.arcs.filter(function(d) { // Get all input arcs:
            return (d.source == transition.id) && (d.type == "normal");
        }).forEach(function(arc, i){ // Foreach input arc get the source place:
            var place = petriNet.places.filter(function(f) {
                return f.id == arc.target;
            })[0];
            place.tokens += arc.weight;
        });
		
		// Set all connected timing arcs to age of 0:
		petriNet.arcs.filter(function(arc) { // Get all timed arcs:
            return (arc.source == transition.id) && (arc.type == "timed");
        }).forEach(function(arc, i){ // Foreach connected timed arc set the age to zero
            console.log("FOUND");
			arc.age = 0;
        });	
          
        checkEnabled();
        checkInhibited();
		checkTimed();
		
        display();
    }
}

function checkTimed()
{
	petriNet.transitions.forEach(function(trans, i) {	
		
		timedInhibited = 0;
		petriNet.arcs.filter(function(arc) {
				return trans.id == arc.target;
        }).forEach(function(arc, i) {
			timedArrow = document.getElementById("timedArrow-"+arc.id);
			timedArrowText = document.getElementById("timedArrowText-"+arc.id);
			
			if(timedArrow != null) {
				timedArrow.style.visibility = 'hidden';
				timedArrowText.style.visibility = 'hidden';
			}
			
			if(arc.age < arc.delay && arc.age != -1) {
				timedInhibited++;
				if(timedArrow != null) {
					timedArrow.style.visibility = 'visible';
					timedArrowText.style.visibility = 'visible';
				}	
			}
		});
		
		if(timedInhibited == 0) {
			trans.timedInhibited = 0;
		} else {
			trans.timedInhibited = 1;
		}
	});
}

function checkTimed2()
{
	petriNet.arcs.filter(function(d) { // Get all input arcs:
			return (d.type == "timed");
	}).forEach(function(arc, i){ // Foreach timed arc get the source transitions:	
		
		var trans = petriNet.transitions.filter(function(f) {
				return f.id == arc.target;
        })[0];

		
		

		
		if(arc.age < arc.delay && arc.age != -1) {
			trans.timedInhibited = 1;
			console.log("ARC: "+arc.id+" "+timedArrow);
						
		} else {
		    trans.timedInhibited = 0;
		}
	});
}

function checkInhibited()
{
	// Mark all enabled transitions:
	petriNet.transitions.forEach(function(transition, j){
	    transition.inhibited = 0;
		petriNet.arcs.filter(function(d) { // Get all input arcs:
			return (d.target == transition.id) && (d.type == "inhibitor");
		}).forEach(function(arc, i){ // Foreach input arc get the source place:
			petriNet.places.filter(function(f) {
				return f.id == arc.source;
			}).forEach(function(place, k){
			    // TODO
			    if(place.tokens >= arc.weight)
			    {
			    	transition.inhibited = 1;
			    }
            });
		});
	});
}

function checkEnabled()
{
	// Mark all enabled transitions:
	petriNet.transitions.forEach(function(transition, j){
		petriNet.arcs.filter(function(d) { // Get all input arcs:
			return (d.target == transition.id) && (d.type == "normal");
		}).forEach(function(arc, i){ // Foreach input arc get the source place:
			if(arc.source != -1)
			{
				var place = petriNet.places.filter(function(f) {
					return f.id == arc.source;
				})[0];

				// The transition is enabled when the connected
				// place has more or equal tokens as the weight
				if(place.tokens >= arc.weight)
				{
					transition.enabled = 1;
				}
				else
				{	
					transition.enabled = 0;
				}
			}
			else
			{
					transition.enabled = 1;
			}
		});
	});
}


function drawline (id, name, x1, x2, y1, y2) {
	var svg = document.getElementById("svg4141");
	NS = svg.getAttribute('xmlns');
	var pt1 = svg.createSVGPoint();
	var pt2 = svg.createSVGPoint();

	pt1.x = x1;
	pt1.y = y1;
	pt2.x = x2;
	pt2.y = y2;

	var pt1b = pt1.matrixTransform(svg.getScreenCTM().inverse());
	var pt2b = pt2.matrixTransform(svg.getScreenCTM().inverse());

	if (x1==x2 && y1==y2){
		var ellipticLine = document.createElementNS(NS,'path');
		ellipticLine.setAttributeNS(null, 'id', "timedArrow-"+id);
		//ellipticLine.setAttributeNS(null, 'd',"M 34.55257,37.274917 A 20.805597,20.895227 0 0 1 6.0455462,35.607419 20.805597,20.895227 0 0 1 6.0455465,6.9290685 20.805597,20.895227 0 0 1 34.55257,5.2615712");
		ellipticLine.setAttributeNS(null, 'd',"M "+pt1b.x+","+pt1b.y+" A 16,8 1 1 0 "+(pt1b.x+16)+","+pt1b.y);
		ellipticLine.setAttributeNS(null, "stroke", "blue");
		ellipticLine.setAttributeNS(null, "marker-end", "url(#DiamondL)");
		//ellipticLine.setAttributeNS(null, "visibility", "hidden");
		svg.append(ellipticLine);
	} else {
		var newLine = document.createElementNS(NS,'line');
		newLine.setAttributeNS(null, 'id', "timedArrow-"+id);
		newLine.setAttributeNS(null, 'x1', pt1b.x+16);
		newLine.setAttributeNS(null, 'y1', pt1b.y+16);
		newLine.setAttributeNS(null, 'x2', pt2b.x+16);
		newLine.setAttributeNS(null, 'y2', pt2b.y+16);
		newLine.setAttributeNS(null, "stroke", "blue");
		newLine.setAttributeNS(null, "marker-end", "url(#DiamondL)");
		newLine.setAttributeNS(null, "visibility", "hidden");
		svg.append(newLine);
	}		
	var newText = document.createElementNS(NS,"text");
	newText.setAttributeNS(null,"x", (pt1b.x - pt2b.x) / 2 + pt2b.x);     
	newText.setAttributeNS(null,"y", (pt1b.y - pt2b.y) / 2 + pt2b.y); 
	newText.setAttributeNS(null,"font-size","16");
	newText.setAttributeNS(null,"fill","blue");
	newText.setAttributeNS(null, 'id', "timedArrowText-"+id);
	newText.setAttributeNS(null, "visibility", "hidden");
	
	var textNode = document.createTextNode(name);
	newText.appendChild(textNode);
	
	svg.append(newText);
}


function init(evt) {
	checkEnabled();
	checkInhibited();
	display();
	setTimeout(clock, 1000);
	
	
	petriNet.arcs.filter(function(arc) { // Get all timed arcs:
	return (arc.type == "timed");
	}).forEach(function(arc, i) {
		
		var transSource = petriNet.transitions.filter(function(f) {
                return f.id == arc.source;
        })[0];
		
		var transTarget = petriNet.transitions.filter(function(f) {
                return f.id == arc.target;
        })[0];
		
		var rect1 = document.getElementById(transSource.name).getBoundingClientRect();
		var rect2 = document.getElementById(transTarget.name).getBoundingClientRect();
		drawline(arc.id, arc.name, rect1.left, rect2.left, rect1.top, rect2.top);
	})
	
	
	
	// Register the click handler for all Transitions:
	for (i = 0; i < petriNet.transitions.length; i++) {
		(function(name) {

		   document.getElementById(name).addEventListener('click', function() {
				clickHandler(name);
		   });

		})(petriNet.transitions[i].name);
	}
}

function clickHandler(node)
{
	fireTransition(node)
}

function display()
{
	petriNet.transitions.forEach(function(transition, j){
		if(transition.enabled == 1 && transition.inhibited == 0 && transition.timedInhibited == 0) 
		{
			document.getElementById(transition.name).style.fill = '#55d400';
		}
		else
		{
			document.getElementById(transition.name).style.fill = '#d40000';
		}
	});

	// Clear Tokens:
	document.getElementById("T_0").style.visibility = 'hidden';
	document.getElementById("T_1").style.visibility = 'hidden';
	document.getElementById("T_IDLE_0").style.visibility  = 'hidden';
	document.getElementById("T_IDLE_1").style.visibility  = 'hidden';
	document.getElementById("T_PDNA").style.visibility = 'hidden';
	document.getElementById("T_SREF").style.visibility = 'hidden';
	document.getElementById("T_PDNP").style.visibility = 'hidden';

    // Show Tokens:
	petriNet.places.forEach(function(place, j){
		if(place.name == "BANK_0" && place.tokens == 1)
        {
            document.getElementById("T_0").style.visibility = 'visible';
        }
        else if(place.name == "BANK_1" && place.tokens == 1)
        {
            document.getElementById("T_1").style.visibility = 'visible';
        }
        else if(place.name == "IDLE" && place.tokens == 1)
        {
            document.getElementById("T_IDLE_0").style.visibility = 'visible';
        }
        else if(place.name == "IDLE" && place.tokens == 2)
        {
            document.getElementById("T_IDLE_0").style.visibility = 'visible';
            document.getElementById("T_IDLE_1").style.visibility = 'visible';
        }
        else if(place.name == "PDNA" && place.tokens == 1)
        {
            document.getElementById("T_PDNA").style.visibility = 'visible';
        }
        else if(place.name == "SREF" && place.tokens == 1)
        {
            document.getElementById("T_SREF").style.visibility = 'visible';
        }
        else if(place.name == "PDNP" && place.tokens == 1)
        {
            document.getElementById("T_PDNP").style.visibility = 'visible';
        }
	});

	// Heart Beat
	if (blinker == 0 ) {
		document.getElementById("heart").style.fill = 'white';
		blinker = 1;
	} else {
		document.getElementById("heart").style.fill = 'red';
		blinker = 0;
	}
}

function clock() {
	//console.log(document.getElementById("REFA").style.fill);

	petriNet.arcs.filter(function(d) { // Get all timing arcs:
			return (d.type == "timed");
	}).forEach(function(arc, i){ // Foreach timed arc increase the age:
		if(arc.age != -1)
		{
			arc.age += 1000;
		}
	});
	
	checkTimed();
    display();

	setTimeout(clock, 1000);
}
