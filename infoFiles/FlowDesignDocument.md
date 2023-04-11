***WLED Command Runner***  
**Design document**

Naming conventions
A flow is the “top level” object. It is the container of all other info and is the “thing” we call to start running a command flow.
A step is the “timetable” that the command runner goes through, from top to bottom deciding what sets to call, in what order and how long to wait until running the next set.
A set is what the flow internally handles. When the runner goes through the flow it runs one set and then waits until it is time to run the next set. A set is a (any) number of API commands that are to be run in sequence (without delaying in-between)
A command is any WLED API command, following the standard. 
The reason for arranging commands in sets is that WLED has a problem with running to massive commands, i.e. setting hundreds of leds. So the desired outcome needs to be split into several commands that can be run one after another.

flows are uploaded as files (to /edit) with the template flow_[someID].JSON

Usage:
A Flow is made up off steps. Each step references a set (of commands)
A flow runner should, when triggerd, 
1. find the file with the correct flow
2. get the array of steps
3. for each step find the set (of commands)
4. Send the commands to WLED
5. Sleep/Wait for the stipulated number of ms
6. Move to next step (as per 4 above)
7. repeat until end of steps
8. If repeat = true start over from step 1
