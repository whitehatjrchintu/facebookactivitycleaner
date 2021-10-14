async function navigate() {
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  url = window.location.href;
  if(url.match("sectionLoadingID")) {
      const full_url = []
      const exploree = document.getElementsByTagName("a");
      for(const eachataghtml of exploree){
        const paths = eachataghtml.getAttribute('href');
        if(paths != null){
          if(paths.match("removecontent")){
			console.log(paths)
            full_url.push('https://mbasic.facebook.com'+paths)
          }
		  else if(paths.match("activity_log")){
			console.log(paths)
            full_url.push('https://mbasic.facebook.com'+paths) 
		  }
        }
      }
      for (const url of full_url) {
        window.open(url)
        await sleep(5000);
      }
	  window.location.reload();
  }
}
navigate()

async function confirm_delete() {
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  url = window.location.href;
  if(url.match("confirm_dialog")) {
      const full_url = []
      const exploree = document.getElementsByTagName("a");
      for(const eachataghtml of exploree){
        const paths = eachataghtml.getAttribute('href');
        if(paths != null){
          if(paths.match("delete")){
			console.log(paths)
            full_url.push('https://mbasic.facebook.com'+paths)
          }
        }
      }
      for (const url of full_url) {
        window.open(url)
        await sleep(3000);
		window.close()
      }
  }
}
confirm_delete()

function close_tab(){
	url = window.location.href;
	if(url.match("&success=1")){
		var getting_delete_liked = document.getElementsByTagName("h3")[0].textContent;
		if (getting_delete_liked == "You unliked an activity." || "You deleted an activity."){
			window.close()
		}
	}
}
close_tab()