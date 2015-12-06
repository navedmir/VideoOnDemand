# VideoOnDemand
##    Introduction
Video on demand(display) (VOD) are systems which allow users to select and watch/listen to video or audio content. <br />
  
  

![Vod preview](http://i.imgur.com/v5W9R4Z.png)

### Demo
https://videoondemand.herokuapp.com/
### Config
 Server:- Node.js  
 Database:- MongoDB  
 Viewing Template:- EJS  
 **Note**:- This app works best with chrome

## Setup
1) You need running nodejs and MongoDB server.  
2) Clone this repo to your desktop and run "npm install" to install all the dependencies.  
  *     npm install  
3) You might want to look into mongoUtil.js to change mongo url(it connects to local mongodb by default).  
 *     var uri = "mongodb://localhost:27017/VOD";
4) Start app using command :-
*     node app.js  
5)  You can access it at localhost:3000
 
## Working
- Home page shows list of videos.
- When you click on a video it opens in full screen.
- For saving History,you need to login in(Settings->Login)  
- To view History (Settings->History)

**Note**:- 
- This site stores cookies.Enable cookies and javascript in browser.  
- This app works best with chrome


