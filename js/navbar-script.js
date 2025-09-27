fetch('navbar.html')
    .then(res => res.text())
    .then(html => {
        const navContainer = document.createElement('div');
        navContainer.innerHTML = html;
        document.body.insertBefore(navContainer, document.body.firstChild);

        const navbar = document.querySelector('.navbar');
        const navBtn = document.createElement('button');
        navBtn.className = 'navbar-btn';
        navBtn.innerText = '☰';
        navBtn.style.display = 'none';
        document.body.appendChild(navBtn);

        // Botão de fechar
        const closeBtn = document.createElement('button');
        closeBtn.className = 'navbar-close-btn';
        closeBtn.innerText = '×';
        closeBtn.style.display = 'none';
        navbar.appendChild(closeBtn);

        // Função para abrir navbar vertical
        function openNavbarVertical() {
            navbar.classList.add('navbar-vertical');
            closeBtn.style.display = 'block';
        }

        // Função para fechar navbar vertical
        function closeNavbarVertical() {
            navbar.classList.remove('navbar-vertical');
            closeBtn.style.display = 'none';
        }

        navBtn.addEventListener('click', openNavbarVertical);
        closeBtn.addEventListener('click', closeNavbarVertical);

        // Consolidar lógica de scroll
        window.addEventListener('scroll', function() {
            const rect = navbar.getBoundingClientRect();
            if (rect.bottom < 0) {
                navBtn.style.display = 'block';
            } else {
                navBtn.style.display = 'none';
            }
            // Fechar navbar vertical só se estiver aberta e no topo
            if (window.scrollY === 0 && navbar.classList.contains('navbar-vertical')) {
                closeNavbarVertical();
            }
        });

        // Fechar navbar vertical se mouse sair dela
        navbar.addEventListener('mouseleave', function() {
            if (navbar.classList.contains('navbar-vertical')) {
                closeNavbarVertical();
            }
        });
    });