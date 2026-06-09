const subTabButtons = document.querySelectorAll("[data-subtabbutton]");
const subTabContents = document.querySelectorAll("[data-subtabcontent]");
const navTabs = document.querySelectorAll(" [main-tab]");
const planetContent = document.querySelectorAll(".planet-content");
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuPanel = document.getElementById("menu-panel");

menuOpenBtn.addEventListener("click", function(){
	menuPanel.classList.toggle("show-menu");
})

// btn-tabs
	subTabButtons.forEach(function (singleButton) {
			singleButton.addEventListener("click", function(){
			removeButtonActiveClass();
			singleButton.classList.add("active-btn");

			const targetedTab = singleButton.getAttribute("data-subtab");
			subTabContents.forEach( function(singleContent){
				const targetedContent = singleContent.getAttribute("data-subtab");
				if (targetedTab === targetedContent){
					singleContent.classList.add("show")
				}
				else{
					singleContent.classList.remove("show")
				}
			});
		});
	});

	const removeButtonActiveClass = function(){
		subTabButtons.forEach(function(singleButton){
			singleButton.classList.remove("active-btn");
		});
	};

// nav-tabs
	navTabs.forEach(function (singleButton) {
			singleButton.addEventListener("click", function(){
				removeActiveClass();
			singleButton.classList.add("active-tab");

			const targetedTab = singleButton.getAttribute("data-tab");
			planetContent.forEach( function(planetContent){
				const targetedMaterial = planetContent.getAttribute("data-tab");
				if (targetedTab === targetedMaterial){
					planetContent.classList.add("active-planet")
				}
				else{
					planetContent.classList.remove("active-planet")
				}
				console.log("planetContent",planetContent)
			});

			menuPanel.classList.remove("show-menu");
		});
	});

	const removeActiveClass = function(){
		navTabs.forEach(function(singleButton){
			singleButton.classList.remove("active-tab");
		});
	};