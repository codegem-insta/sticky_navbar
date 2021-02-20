# Sticky Navbar

<p align="center"><img src="screenshots/main.gif" width="50%"/></p>

### UseNavbar hook


```jsx
function useNavbarClass() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    setScrolled(offset > 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navBarClasses = scrolled ? [style.Navbar, style.Scrolled] : [style.Navbar];

  return navBarClasses.join(" ");
}
```

### Navbar component

```jsx
function Navbar() {
  const finalClass = useNavbarClass();

  return (
    <header className={finalClass}>
      <div className={style.Logo}>{/* your logo */}</div>

      <nav className={style.Navigation}>

        <ol>
          <li>Home</li>
          <li>Info</li>
          <li>Contact</li>
        </ol>

      </nav>
    </header>
  );
}
```

### CSS styles

Style before we scrolled down:

```css
.Navbar {
  width: 100%;
  min-height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #425874;
  z-index: 3;
}
```

Style after we scroll far enough:

```css
@keyframes dropdown {
    from {
        top: -150px;
    }

    to {
        top: 0px;
    }
}

.Scrolled {
  position: fixed;
  left: 0;
  animation: dropdown 0.3s ease-out;
}
```

---

# How to install

Clone the repo
```shell
git clone <URL>
```

Cd into the cloned folder and install dependencies
```shell
cd <FOLDER>
npm install
```

Run React, this should open a page in your browser
```shell
npm run start
```

**Note:** if you don't have `nodejs` installed go to [this link](https://nodejs.org/en/download/)