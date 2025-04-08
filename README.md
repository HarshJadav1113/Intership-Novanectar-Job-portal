
# 🚀 Novanectar Job Portal

Welcome to **Novanectar Job Portal**, a modern and intuitive platform where job seekers and companies connect effortlessly. Built with **React.js**, styled using **CSS**, animated with **Framer Motion**, and featuring a functional contact form via **EmailJS** — this project demonstrates a real-world React application.

---

## 📸 Project Preview

![Job Portal Preview](src/assets/1.png)

---

## ✨ Key Features

- 🏠 **Home Page** – Eye-catching hero section with animations and a call-to-action button
- 📬 **Contact Us** – Fully working email form using EmailJS
- 🖱️ **Framer Motion** – Smooth animations on buttons and page transitions
- 📱 **Responsive Design** – Mobile-friendly and cross-browser compatible
- 🧭 **Navigation** – Simple routing using React Router DOM
- 🔗 **Footer Section** – Includes links to policies and contact information

---

## 📁 Project Structure

```
src/
├── assets/            → Image files (e.g., 1.png)
├── components/        → Footer and other reusable UI components
│   └── Footer.js
├── pages/             → Main views like Home and Contact
│   ├── Home.js
│   └── Contact.js
├── styles/            → CSS files for individual components
│   ├── Home.css
│   ├── Contact.css
│   └── Footer.css
├── App.js             → Main App component with routing
└── index.js           → Entry point of the application
```

---

## ⚙️ Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 🔧 Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/novanectar-job-portal.git
   cd novanectar-job-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` to view it in your browser.

---

## 📬 EmailJS Integration (for Contact Form)

To activate the contact form functionality:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create:
   - **Email Service**
   - **Email Template**
3. In `Contact.js`, replace:
   ```js
   emailjs.sendForm(
     "YOUR_SERVICE_ID", 
     "YOUR_TEMPLATE_ID", 
     form.current, 
     "YOUR_PUBLIC_KEY"
   )
   ```

4. That's it! You’ll receive emails directly from the form submissions.

---

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. Open `http://localhost:3000` in your browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in watch mode.

### `npm run eject`
**Note:** This is a one-way operation. Once ejected, you can’t go back!

---

## 🌐 Technologies Used

| Tech              | Purpose                            |
|-------------------|-------------------------------------|
| React             | Frontend JavaScript framework       |
| Framer Motion     | Animations and transitions          |
| EmailJS           | Contact form email service          |
| React Router DOM  | Page routing                        |
| CSS               | Styling and layout                  |
| Font Awesome      | Icons in footer and links           |

---

## 🧠 Learn More

- [React Documentation](https://reactjs.org/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Router Docs](https://reactrouter.com/en/main)

---

## 🧪 Deployment

To deploy the app:

```bash
npm run build
```

Then deploy the `/build` folder to your preferred hosting service (e.g., Vercel, Netlify, GitHub Pages).

---

## 👨‍💻 Author

**Harsh Jadav** – passionate about building modern, clean, and effective web apps.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy coding with ✨ Novanectar Job Portal ✨!
