## Centivo - Potential Architecture Pathways

# **Option 1:**

### **Separate HTML and Native React apps that share as much code as possible**

---

* challenges:

  * some features like navigation and styling will be drastically different and can take up a lot of dev time. Navigation can potentially be a completely different system and could require a different approach (rather than 1:1 feature translation)
  * future maintenance will also be separate branches/codebases.

* pros:
  * full control of the app and experience
  * app will be as performant as possible
  * code sharing is still a plus, even if navigation and styling will need to be recreated, but it's not a 1:1 100% reusable code situation

> If we can focus on making our container components purely logical then all of the work done for the React Native site will be focused on Navigation, presentational components (the view) and translating the HTML site's styling to RN's css-in-js format.

---

# **Option 2:**

### **Use a WebView component and feed the desktop HTML React site into a wrapper RN site**

--

* challenges:

  *

* pros:
  * Will save a ton of development time and minimize potential errors due to having much less code to work with.

---

GIF showing sign in process which uses localStorage: [Screen Recording 2018-05-18 at 09.14 AM.gif](https://cl.ly/rgkX)

The RN app can fetch/save data on its own then send it to the WebView

React-Native-Web: https://hackernoon.com/react-native-web-and-true-component-sharing-caa535b9dd7f

> "React Native for Web" brings the platform-agnostic Components and APIs of React Native to the Web.
