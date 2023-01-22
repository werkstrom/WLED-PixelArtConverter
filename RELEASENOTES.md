# Version 1.0.6  
## Main take aways 
- Streamlined the conversion process  
  - Image generates as soon as there is enough input to generete an image
  - Image regenerates on value changes. No need to press convert button
  - Segments are now named as on the device
  - If are selected, and rescale is active, w/h will be automatically set from the selected segment
  - Buttons that communicate with the device is more informative of success (green) or fail (red)
  - Convertbutton removed (since there is no use for pressing it any more)
- Minor bugfixes and adjustments

# Version 1.0.5  
## Main take aways 
- Querying the device for available segments
- Manually input any segment id (0-63)
- Preview matrix is now centered also on landscape displays
- Several UI adjustments
- Alignment with WLED profile
- Development moved to main WLED project
- Changed file ending to htm to align with WLED naming

# Version 1.0.4  
## Main take aways 
- Minor visual adjustments

# Version 1.0.3  
## Main take aways 
- Possible to send your image to different segments. There appear to be some sort of issue we havent identified, so currently only segment 0 works. Bur we need to get the function in there to test, so... Test on!
- Minor adjustments and bugfixes

# Version 1.0.2  
## Main take aways  
- Developer mode: Some new and experimental features will be turned off unless you run in developer mode. To enter developermode append "?dev" to the url. Example: http://192.168.0.123/pixartmin.htm?dev
- File to device: Experimental feature to send the generated code as a file to the device instead of using the JSON API. Will not do anything more on the device at the moment.
- Minor adjustmensts
