**SOOZ**
=========
SOOZ is a content-aware nondeterministic exhibition platform, designed and implemented to display static, dynamic or interactive content created by artists and enthusiasts for the web. Scalability and ease of use has been the focus of this project, allowing creators to utilize an array of **modifiers** provided by the platform to translate static content to dynamic web **canvases**. SOOZ also enables implementation of web content created outside the scope of the platform. Regardless of the content, be it a fully developed web application or a series of images, the platform is capable of bringing the works of creators to life in a cohesive way that complements how content is digested in today's digital environments. 

Below is an overview of concepts associated with the platform and divided into two categories: interaction and development. 

**Interaction**: Terminology
-----------
**Canvas**
A canvas refers to the piece currently being previewed. This is solely a term used for distinguishing the creators' work from other components of the platform that sit on top of the canvas. Canvases occupy the entirety of the screen, and they can utilize this space to interact with the browser and the viewer. 

 - **Static Canvas**:  A static canvas has the same form and presentation on every iteration.
[Example 1 by Dalena Tran](http://sooz.global/#/trananne).
[Example 2 by Mikey Joyce](http://sooz.global/#/joyce).

 - **Dynamic Canvas**: Dynamic canvases have a nondeterministic approach; meaning that presentation of content and the behavior are different on each iteration. For such canvases, an array of static content is usually provided by the creator, which then is animated using custom modifiers provided by the platform.
 [Example 1 by Eltons Kūns utilizing static images](http://sooz.global/#/kuns).
[Example 2 by Rachel Archibald utilizing static images, gifs and video files](http://sooz.global/#/archibald).
 - **Interactive Canvas**: Such canvases allow for direct interaction between the user and the creators' work, in which the canvas responds to specific behavior(s) of the visitor. 
[Example 1 responding to user's mouse movement](http://sooz.global/#/feelingclose).
[Example 2 responding to clicks, scrolling and dragging (Requires WebGL)](http://sooz.global/#/feelingstairs).

 - **Independent Canvas**: These canvases are developed outside the scope of the platform by the creators and utilize a web-compatible technology based on their preference. Independent canvases are later implemented inside the platform using HTML inline frame syntax. 
[Example by Pieter Jossa utilizing JavaScript and Adobe Flash](http://sooz.global/#/jossa).

The scalibility of the platform allows creators to utilize it to bring their ideas to life regardless of their knowledge and technical background.

**Interaction**: Navigation
-----------


Installation
------------

This package can be placed anywhere on your hard drive and can be viewed by opening `index.html` file. For your work to appear as intended, we highly recommend using [Chrome](https://www.google.com/chrome/browser/desktop/). 

> In order to run `index.html` locally and functionally, you need to enable `--allow-file-access-from-files` flag in Chrome. Follow the
> guides for [Windows](http://chrisbitting.com/2014/03/04/allow-local-file-access-in-chrome-windows/) or [Mac](http://blog.derraab.com/2013/05/30/start-google-chrome-with-local-file-access-on-mac-os-x/), depending on your operating system to do so. Make sure to close all Chrome instances completely before starting the browser with the flag enabled.
> 
> If for any reason the package does not properly function from your hard drive, it is possible to upload `sooz-dist` folder to your public **Dropbox** folder and access it using the public link provided.

Hierarchy
---------

For simplicity, editable files and folders are marked with a dash `-` at the beginning of file name. After opening `sooz-dist` folder you will face this hierarchy of files and folders:

 - `sooz-components`
 - **`-YOUR-IMAGES`**
 - **`-CANVAS.html`**
 - **`-IMAGES.js`**
 - `index.html`

Files and folders from the above list in bold are the core structure of your canvas, and what you will be working.

Media Limitation
----------------

Realistically there is no limitation to the content you wish to provide as long as it is supported by Web standards. However, in terms of hierarchy, only images are allowed to exist in `–YOUR-IMAGES` folder. Images placed in this folder will be displayed nondeterministically in your canvas. Supported formats are PNG, GIF, JPG, BMP and other web-compatible image formats. Other media content such as videos, 3D objects, and external web content can be easily implemented using `iframes`. We shall explore into this in the following steps.

-YOUR-IMAGES
------------

This folder is a placeholder for your images to be displayed on the canvas in a random fashion. However simply dragging and dropping images in this folder will not integrate them with the website. Implementation of images is facilitated using `-IMAGES.js` file.

-IMAGES.js
----------

This file allows inputting images in your canvas. The advantage of `-IMAGES.js` is that you use **bundles** rather than single images. Bundles allow you to ensure that a group of images are *always served together* to the viewer.  Bundles can include a minimum of one image; there is no maximum defined. 
Let’s dive into `-IMAGES.js` format. Before we proceed I suggest to use a text editor with syntax highlighting to edit this file. You can get free ones by googling Notepad++ (Windows) or SublimeText (Mac & Windows). 

<pre>
var yourImages = [
	{"photos" : [
		{"original_size": {"url": "<b>-YOUR-IMAGES/1.png</b>"}},
	]},
	{"photos" : [
		{"original_size": {"url": "<b>-YOUR-IMAGES/2.png</b>"}},
	]},
	{"photos" : [
		{"original_size": {"url": "<b>-YOUR-IMAGES/3.png</b>"}},
	]},
	{"photos" : [
		{"original_size": {"url": "<b>-YOUR-IMAGES/4.png</b>"}},
	]},
];
</pre>

Above is the default format of `-IMAGES.js` that includes four bundles, each including one image of roses. Let’s modify this so that we have three bundles, with two of them including more than one image.
<pre>
var yourImages = [
	{"photos": [
		{"original_size": {"url": "<b>-YOUR-IMAGES/One.png</b>"}},
		{"original_size": {"url": "<b>-YOUR-IMAGES/Two.png</b>"}},
	]},
	{"photos": [
		{"original_size": {"url": "<b>-YOUR-IMAGES/Three.png</b>"}},
	]},
	{"photos": [
		{"original_size": {"url": "<b>-YOUR-IMAGES/Six.png</b>"}},
		{"original_size": {"url": "<b>-YOUR-IMAGES/Seven.png</b>"}},
		{"original_size": {"url": "-<b>YOUR-IMAGES/Eight.png</b>"}},
	]},
];
</pre>
Let me clarify things a bit more. Below is the syntax of a bundle with one image:
<pre>
	{"photos": [
		{"original_size": {"url": "<b>-YOUR-IMAGES/One.png</b>"}},
	]},
</pre>
And if you want to bundle more images, you can simply copy/paste the line with orginal_size:
<pre>
	{"photos": [
		{"original_size": {"url": "<b>-YOUR-IMAGES/One.png</b>"}},
		{"original_size": {"url": "<b>-YOUR-IMAGES/Two.png</b>"}},
	]},
</pre>
Finally, **commas** are pretty important in the code above, so keep them in mind as you copy/paste, and don’t forget to save the file.

-CANVAS.html
------------

This is the file responsible for how your canvas will be displayed. If you are satisfied with how your canvas looks with your images, you can leave this file as is and not change anything.
`-CANVAS.html` is based on HTML to make modifications scalable and simple. You can easily add more elements as you wish, or leave it as is without any modifications. The rest of this guide will focus on this file and what you can do with it using sooz’s modifiers. Keep in mind that you have full customization powers using HTML, CSS, Javascript/jQuery through this file, but this can be an overwhelming subject, and we will not focus on it. So let’s get started with a simple example. 
Images located in `–YOUR-IMAGES` are automatically added to your canvas on a random basis. But not all of you content needs to behave like this. For instance maybe you want to add an image that is static and present at all times on your canvas. You can do so by adding an `img` tag to `-CANVAS.html` :

    <img src="-YOUR-IMAGES/1.png">

Now `1.png` is always visible on our canvas. But it is included twice in some iterations because it also exists in –YOUR-IMAGES folder and consequently in our random images. To prevent duplication you can create folders for you static content in `sooz-dist` directory, then the `img` tag from above will change to:

    <img src="-FOLDER-NAME/YOUR-FILE.png">

We don’t like the position of this image, so let’s use one of the custom modifiers from sooz.

    <img sz-position src="-FOLDER-NAME/YOUR-FILE.png">

We just added a modifier to our static image by adding `sz-position`. This is a custom modifier to makes things easier for you. Now every time you refresh your canvas, `YOUR-FILE.png` will have a random position that is animated and dynamic. But what if we want it to have different size as well? Easy, just add `sz-width`:

    <img sz-position sz-width src="-FOLDER-NAME/YOUR-FILE.png">

`-CANVAS.html` starts with two instances of the code below:

    <div sz-position sz-border sz-size sz-order style="border-color: black;"></div>

Above snippet is responsible for the animated black borders that appear on default canvas. `div` is an HTML syntax for containers. In this case our container doesn’t include anything, and we are simply styling it and giving it different attributes such as position, width, height, and border. You can harness the power of modifiers for majority of HTML elements and combine it with simple CSS, in this case  `border-color: black;`.

Modifiers summarize common functionality on sooz to simple syntax with `sz-` prefix. The advantage of modifiers is that you can also combine them with external content.
HTML gives you the power to bring content from the external sources. You can embed videos from Youtube and Vimeo, import 3D models with Clara.io, display tweets and do as you please with embeddable content. Keep in mind that you can use modifiers on these content as well. So for example here is a video from Youtube: 

    <iframe sz-positon src="https://www.youtube.com/embed/-w3c2j6jO5s"></iframe>

This video will have a random position on every iteration of your canvas because we added `sz-position`. As you can see, modifiers can be combined to bring dynamism anf flexibility to your work. Below is a list of available modifiers on sooz:

`sz-order`: Gives random layer priority to element. Elements without this are placed at the bottom.

`sz-position`: Gives random position on to element.

`sz-size`: Gives random size to element. Ratio is not preserved, it is random.

`sz-width`: Gives random width to element, height will be adjusted to preserve ratio.

`sz-height`: Gives random height to element, width will be adjusted to preserve ratio.

`sz-rotate`: Gives random right angle rotation to element.

`sz-border`: Gives random border to an element.

`sz-mask-frame`: Masks element in the shape of a frame. Consistent behavior on every iteration.

`sz-mask-rect`: Masks element in the shape of a rectangle. Random on every iteration.

`sz-mask-circ`: Masks element in the shape of a full or partial circle. Random on every iteration.

`sz-mask-x`: Masks an element in the shape of an X. Consistent behavior on every iteration.

`sz-mask-diamond`: Masks element in the shape of a diamond, based on element size.

`sz-spin`: Adds an infinite spinning animation to element.

`sz-frame`: Applies sz-position, sz-size, sz-border, and sz-order all together.

`sz-image`: Applies sz-position, sz-width, and sz-order all together.

