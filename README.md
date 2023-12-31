This is a Oyo Clone website developed with Next.js MongoDB where Postman has been used for API testing.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Functions in the website

1. Starting from the very top-right corner, there is a login/signup button from where users can easily login/signup just by providing Name, Email, and Password.

2. Then, there is a navigation header containing the names of the different cities such as Kolkata, Mumbai, Delhi, Banglore, and Hyderabad which is clickable and users can see all the listed hotels.

3. Then, there is a search bar from where users can search the hotels according to their City,
   for example, if someone wants to search all the desired hotels in Kolkata, they can do so easily by writing Kolkata in the search bar and then clicking Search button.

4. When users will be navigated to the Hotels page after searching their desired City, there is 2 filter options such as Price and Features. Users can drag the price slider and then click the search button to see the desired result of hotels.

5. After that, users can check the Features option to see the results accordingly, such as if an user want to see the hotels only with Garden Feature, he/she can check the Garden option and see the result as available hotels.

6. After getting the desired hotels, user can see the details of the hotel simply click the button See Details.

7. There is one more additional function of the website. If an user got through all the process and wants to Book hotel, he/she has to login first if not logged in previously.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
