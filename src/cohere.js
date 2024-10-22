import  {CohereClientV2} from "cohere-ai";
// import conf from "./conf/conf.js";
// const apikey=conf.apikeycohere
console.log(import.meta.env.VITE_API_KEY)
console.log(import.meta.env.VITE_API_KEY)
console.log("hello")
// const cohere = new CohereClientV2({
//   token:  apikey,
  
// });

// (async () => {
//   const response = await cohere.chat({
//     model: 'command-r-plus',
//     messages: [
//       {
//         role: 'user',
//         content: 'tell me about yourself',
//       },
//     ],
//   });

//   console.log(response.message.content[0].text);
// })(