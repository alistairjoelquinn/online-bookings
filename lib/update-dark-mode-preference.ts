export default function updateDarkModePreference() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}
