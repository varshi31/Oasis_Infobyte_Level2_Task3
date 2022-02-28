window.addEventListener('load', () => {
	const form = document.querySelector("#ntf");
	const input = document.querySelector("#nti");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const  b = document.createElement('div');
		b.classList.add('task');

		const c= document.createElement('div');
		c.classList.add('content');

		b.appendChild(c);

		const d = document.createElement('input');
		d.classList.add('text');
		d.type = 'text';
		d.value = task;
		d.setAttribute('readonly', 'readonly');

		c.appendChild(d);

		const z = document.createElement('div');
		z.classList.add('actions');

		const f = document.createElement('button');
	    f.classList.add('edit');
		f.innerText = 'Edit';

		const g = document.createElement('button');
		g.classList.add('delete');
		g.innerText = 'Delete';

		z.appendChild(f);
		z.appendChild(g);

		b.appendChild(z);

		list_el.appendChild(b);

		input.value = '';

		f.addEventListener('click', (e) => {
			if (f.innerText.toLowerCase() == "edit") {
				f.innerText = "Save";
			    d.removeAttribute("readonly");
				d.focus();
			} else {
				f.innerText = "Edit";
				d.setAttribute("readonly", "readonly");
			}
		});

		g.addEventListener('click', (e) => {
			list_el.removeChild(b);
		});
	});
});