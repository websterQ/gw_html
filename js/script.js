document.addEventListener('DOMContentLoaded', function() {
	if (window.innerWidth <= 768) {
		const menuItems = document.querySelectorAll('.has-submenu');
		menuItems.forEach(item => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const dropdown = this.nextElementSibling;
				if (dropdown.classList.contains('active')) {
					dropdown.classList.remove('active');
				} else {
					// 关闭其他打开的菜单
					document.querySelectorAll('.dropdown.active, .dropdown-submenu.active')
						.forEach(el => {
							if (el !== dropdown) {
								el.classList.remove('active');
							}
						});
					dropdown.classList.add('active');
				}
			});
		});
	}
});