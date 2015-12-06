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
```bash
          npm install  
```
  *     
3) You might want to look into mongoUtil.js to change mongo url(it connects to local mongodb by default). 
```bash
          var uri = "mongodb://localhost:27017/VOD";
```
 
4) Start app using command :-
```bash
          node app.js  
```      
5)  You can access it at localhost:3000
 
## Working
- Home page shows list of videos.
- When you click on a video it opens in full screen.
- For saving History,you need to login in(Settings->Login)  
- To view History (Settings->History)  

## Mongo Structure
```bash
{
	"_id": ObjectId("56628c32ca2429b808c76971"),
	"username": "testname",
	"password": "encryptedpassword",
	"ViewingHistory": [{
		"id": "videoid",
		"url": "videourl",
		"title": "video title"
	}, {
		"id": "videoid",
		"url": "videourl",
		"title": "video title"
	}]
}  
```
**Note**:- 
- This site stores cookies.Enable cookies and javascript in browser.  
- This app works best with chrome


