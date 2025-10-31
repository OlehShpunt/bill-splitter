<br />
<div align="center">
  <a href="https://bill-splitter-liart.vercel.app/scan">
    <img src="icon.png" alt="Bill Splitter Icon" width="80" height="80">
  </a>

  <h3 align="center">Receipt Splitting Web Application</h3>

  <p align="center">
    Upload a receipt, extract items with Mistral AI, assign items to people, and see a final summary of who owes how much.
    <br />
    <a href="https://bill-splitter-liart.vercel.app/scan"><strong>Try it out »</strong></a>
    <br />
    <br />
    <a href="https://github.com/OlehShpunt/bill-splitter/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/OlehShpunt/bill-splitter/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


## About The Project

A mobile-first web app for bill splitting: upload a receipt, extract items with Mistral AI, assign items to people, and see a final summary of who owes how much.

The project frontend is built with components reused accross the whole application.

[![Product Screenshots][product-screenshots]][product-url]


## Functionality

- [x] Frontend pages
    - [x] Upload receipt
    - [x] Verify extracted items
    - [x] Add people
    - [x] Select items
    - [x] Results
- [x] Mistral AI OCR receipt processing (item extraction)
- [ ] Edit item in case extracted details are inaccurate
- [ ] Add item manually
- [x] Add people to split items between
- [x] Select what items each person pays for
- [x] Price splitting logic
- [ ] Export results


## Tech Stack
### Frontend

[![NextJS][Next-badge]][Next-url]\
[![ReactJS][React-badge]][React-url]\
[![TailwindCSS][Tailwind-badge]][Tailwind-url]

### Backend

[![ExpressJS][Express-badge]][Express-url]\
[![MistralAI][Mistral-badge]][Mistral-url]

### Deployment

[![Vite][Vite-badge]][Vite-url]\
[Render][Render-url]


## Issues
* First receipt item extraction takes about a minute due to [the free Render tier's server spinning down on idle](https://render.com/docs/free#spinning-down-on-idle). If the backend server doesn't receive any request for 15 minutes, it shuts down. Hence, the very first time the backend is used after inactivity, the request processing takes much more time because of the server start. <br/>In case the server is up (you have uploaded a receipt once already within the last 15 minutes), it only takes from 5 to 15 seconds to extract items from the uploaded receipt. <br/>This issue can be resolved by upgrading the backend hosting service tier.

* It may be hard for the user to figure out how to add people. I need to add some hint to show that the user need to press on the circle with the plus sign. The "easy-to-learn" usability goal needs to be improved on the "Add People" page to make the interface more intuitive.


## Getting Started

Get a free Mistral AI API key and put it in the .env file.

Start the Backend

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

Start the Frontend

```bash
cd frontend
npm run dev
```


[product-screenshots]: product-screenshots.png
[product-url]: https://bill-splitter-liart.vercel.app/scan/

[Next-badge]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React-badge]: https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/

[Express-badge]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[Tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/

[Mistral-badge]: https://img.shields.io/badge/Mistral%20AI-FA520F?style=for-the-badge&logo=mistral-ai&logoColor=fff
[Mistral-url]: https://mistral.ai/

[Vite-badge]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff
[Vite-url]: https://vite.dev/

[Render-url]: https://render.com/
