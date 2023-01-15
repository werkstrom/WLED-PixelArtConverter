# WLED-PixelArtConverter
Convert any image your browser can render into pixel art for WLED

This is a tool for making it easy to show pixel art on a LED panel run by WLED

Find out more about the awesome [WLED software](https://kno.wled.ge/) or their [GitHub](https://github.com/Aircoookie/WLED)

Please read "Current notes" at the end of the document for known issues and important hints

## Most notable functions

- You can convert almost any image (tested with at least PNG, JPG, WEBP, GIF)
- You can upload the generated settings directly to your WLED device, with a click of a button
- If you want to trigger your image from Home Assistant the tool also generates the entire YAML for your configuration.yaml
- If you want to trigger your image from any other place/system the tool generates a complete CURL command
- You can adjust the format you send the data to WLED in(to fit your specific setup, i.e. slow or limited devices)
- Generates several types led orders, to fit your setup (though with 2D setup you should not need to anymore)
- Very small footprint. Only about 35 kB excluding favicons
- 100% pure Javascript/html/CSS
- Runs in your browser only, no sending iimages to any cloud services

## Basic Operations

1. First download the ZIP from here (download[version].zip) and extract it to some where on your computer. Any OS should do really since its purely run inside the browser.
2. Locate the index.html file. And open it
3. Select the settings according to your settup and what you want to do.
4. Select an image (or drag and drop one) and make sure the preview is visable (the very small image). This indicates your image can be read by the tool
5. Click the button below to convert your image.
6. You should be able to se a large preview of the generated led data at the bottom of the page
**A. Direct upload**
7a. Press the button to send your image to your WLED device.
8a. Validate the image reached the device and is looking as expected. If not change the parameters in PixelArtConverer and try again.
9a. Create a preset on your device from the current setting (follow the instructions [here](https://kno.wled.ge/features/presets/) TL;DR: Press the "Create Preset" button.
10a. If you want to upload the same image to another device, simply change the Device IP/host name and click "Send to device" again
***B. Use elsewhere*
8. Copy the generated code if you want to use it outside of the PixelArtConverter/WLED Note: Since you are running the tool localy, you will not be allowed to copy to your clipboard automatically. You will ned to mark the entire text (ctrl+a) and copy it (ctrl+c).
9. Paste the text into your tool of choice.

## Notes and tips

### Image Size
It is ***necessary*** that your image size matches your LED display, perfectly. There are som many free online tools out there and which one is the best today will vary. Just google it and find one that works for you. Just as a short note: There is no resize function in PixelArtCreator for the simple reason there are som many others that do it, and do it very well. 

### Output format
Pretty self explainatory. If you are to upload to your device from PixelArtConverter you should select WLED JSON

### Color code format
Though WLED can handle both. The documentation explicitly states HEX is faster and requires less resources. Use it whenever you can.

### Addressing
PixelArtConverter can either generate one color code per led/pixel, Or, it can identify ranges within your image. Many times the ranges option generates fewer commands and is thus faster and more reliable. But not allways. If you upload to your device and saves it as a preset, it doesn't matter. The preset is based on WLED's internal format and is thus optimized. But if you are to trigger the image from another place, like Home Assistant it can make a lot of difference, depending on your image. The Ukranian flag (that everybody knows by now) is MUCH faster and easier in range mode, but a chess board migt actually be slower...

### Number of colors per command
WLED is running on very limited devices, and you're throwing a massive amount af data on them in a very short time. To make things easy on the devices, limit your number of colors. You can test with your device how much it can handle. But this will vary.

### Home Assistant
The code generated will create a switch for you within home Assistant. What you do with it, how you trigger it, how you make it look in Home Assistant... Anything you wonder about that. Head over to the [Home Assistant Forum](https://community.home-assistant.io/)

### Where to find images
If you want to create your own or modify/edit then [www.pixilart.com](https://www.pixilart.com) is an excelent tool
If you want to find old sprites from old games try out [www.spriters-resource.com](https://www.spriters-resource.com) or [opengameart.org](https://opengameart.org/)
There are also some (a few) here in the folder "examples"

## Current notes

### http, https and the issue with **mixed content** in web browsers
As a security meassure web browser do not allow you to access resources (web panges and web services) through http (un encrypted) from a page (like PixelArtConverter) when it is loaded through https (encrypted). Also public webservers (like [ledcalculator.werkstrom.com](https://ledcalculator.werkstrom.com)) "must" (in practise) use https. This means two things.

1. In order to upload directly to your device, PixelArtConverter **must** be loaded in the same security context (http/https) as WLED. Since most WLED devices are local, IoT devices it's mainly http. That's why you need to download the files and run them locally. A more convenient sollution is to have WLED serve you the page directly as that will solve any issues with possible missmatch. As of today you can set this up manually by uploading the files to your device @ [your.device.ip]/edit and then loading it to your browser using [your.device.ip]/index.html. We're looking into adding it in a more convenient way.
2. You cannot use the tool @ [ledcalculator.werkstrom.com](https://ledcalculator.werkstrom.com) to upload **directly** to your device. The generated JSON, CURL and Home Assistant code will work just fine though.

### Possible issue with single addressing after WLED V0.14.0-b1
As of V0.14.0-b1 there is a bug in WLED that PixelArtConverter have a workaround for that will probably break your upload if you

1. Use **Single** addressing (and you shouldn't)
2. Have a later build of WLED. 

It should in practise not be a problem, but keep in mind if you get issues




