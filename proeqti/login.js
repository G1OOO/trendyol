        document.addEventListener('DOMContentLoaded', () => {
            const loginTab = document.getElementById('loginTab');
            const becomeMemberTab = document.getElementById('becomeMemberTab');
            const loginFormSection = document.getElementById('loginFormSection');
            const registerFormSection = document.getElementById('registerFormSection');
            const eyeIcons = document.querySelectorAll('.eye-icon');

            function switchTab(activeTab, inactiveTab, activeSection, inactiveSection) {
                activeTab.classList.add('active');
                inactiveTab.classList.remove('active');
                activeSection.classList.add('active');
                inactiveSection.classList.remove('active');
            }

            loginTab.addEventListener('click', () => {
                switchTab(loginTab, becomeMemberTab, loginFormSection, registerFormSection);
            });

            becomeMemberTab.addEventListener('click', () => {
                switchTab(becomeMemberTab, loginTab, registerFormSection, loginFormSection);
            });

            eyeIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                    const targetId = icon.dataset.target;
                    const passwordField = document.getElementById(targetId);

                    if (passwordField.type === 'password') {
                        passwordField.type = 'text';
                        passwordField.style.width = "100%";
                        passwordField.style.padding = "12px";
                        passwordField.style.border = "1px solid #ccc";
                        passwordField.style.borderRadius = "6px";
                        passwordField.style.fontSize = "16px";
                        passwordField.style.boxSizing = "border-box";
                        passwordField.style.outline = "none";
                        passwordField.style.transition = "border-color 0.2s";
                        icon.textContent = '🙈';
                    } else {
                        passwordField.type = 'password';
                        icon.textContent = '👁️';
                    }
                });
            });
        });