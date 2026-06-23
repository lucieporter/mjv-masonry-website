// Minimal JS for navigation toggle and simple form placeholders
document.addEventListener('DOMContentLoaded',function(){
	// nav toggle for small screens
	const toggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('site-nav');
	if(toggle && nav){
		toggle.addEventListener('click',()=>{
			const expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!expanded));
			nav.style.display = expanded ? 'none' : 'block';
		});
	}

	// set year placeholders if present
	['year','year-about','year-services','year-portfolio','year-areas','year-quote','year-book','year-faq','year-contact'].forEach(id=>{
		const el = document.getElementById(id);
		if(el) el.textContent = new Date().getFullYear();
	});

	// simple form handlers (placeholder only)
	const forms = document.querySelectorAll('form');
	forms.forEach(form=>{
		form.addEventListener('submit',e=>{
			e.preventDefault();
			// do not send data — placeholder only
			alert('Form submission is a placeholder. Contact details: [PENDING MARTY CONFIRMATION]');
		});
	});
});
