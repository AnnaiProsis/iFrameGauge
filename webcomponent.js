(function()  {
let tmpl = document.createElement('template');

/* CSS within the project */
tmpl.innerHTML = `
  <style>
  </style>
 
`;

class IFrame extends HTMLElement {

	constructor() {
		/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
		super();
		/* Shadow DOM */
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		this.style.height = "100%";
	
		//this._shadowRoot.addEventListener("click", this.onClick());
 		
		//this._shadowRoot.addEventListener("click", event => {
		//	var event = new Event("onClick");
		//	this.dispatchEvent(event);
		//	});
		
		 this.addEventListener("click", function() {
			window.open(this._urlLink,"_blank");
			console.log("window opened");
		}, false);
		
		//this._urlLink = "https://www.sap.com/index.html";	
		console.log("Sap link passed: " + this._urlLink);
	}

    get urlLink() {
	    console.log("url Get");
    	    return this._urlLink;
    }
    set urlLink(value) {
	    console.log("url Set");
		this._urlLink = value;
    }

//     onClick() {
// 	//window.location.assign("https://www.sap.com/index.html");
// 	window.open(this._urlLink,"_blank");
// 	window.open("https://www.sap.com/index.html","_blank");
// 	console.log("window opened");
//   }
}
  /* Define web component - input: tag and class */
  customElements.define('com-iprosis-sample-gauge', IFrame);
})();
