const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    //store the triggered event for later
    window.deferredPrompt = event;

    //remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

//  a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
     const promptEvent = window.deferredPrompt;
     if (!promptEvent) {
         return;
     }  
     //show prompt to user   
     promptEvent.prompt();

     //reset the defferent prompt variable, since prompt() can only be called once
        window.deferredPrompt = null;
    
        //hide the button
        butInstall.classList.toggle('hidden', true);
});

//  handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear the prompt
    window.deferredPrompt = null;
});
