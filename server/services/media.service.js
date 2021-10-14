// const axios = require('axios');
// const { Media } = require('../models');
// const { URL } = require('url');

// // type: {
// //     type: String,
// //     required: true,
// //   },
// //   url: {
// //     type: String,
// //     required: true,
// //   },
// //   source: {
// //     type: String,
// //   },
// //   preview: {
// //     type: String,
// //   },

// const streamableHelper = async (urlInfo) => {
//   const { pathname } = urlInfo;
//   const link = 'https://api.streamable.com/videos/' + pathname;
//   const { data } = await axios(link);
//   return { source: urlInfo.host, preview: data.thumbnail_url };
// };

// const gfycatHelper = (urlInfo) => {
//   console.log(urlInfo);
// };
// const addMedia = async (type, url, source = '', preview = '') => {
//   if (type === 'video') {
//     const urlInfo = new URL(url);
//     switch (urlInfo.host) {
//       case 'streamable.com':
//         return streamableHelper(urlInfo);
//         break;
//       case 'gfycat.com':
//         gfycatHelper();
//         break;

//       default:
//         return { error: 'invalid link' };
//         break;
//     }
//     return urlInfo;
//   } else {
//     try {
//       const response = await axios(url);
//       return response.data;
//     } catch (err) {
//       return { error: 'bad url' };
//     }
//   }

//   // const newMedia = new Media({
//   //   type: type,
//   //   url: url,
//   //   source: source,
//   //   preview: preview,
//   //   ratio: ratio,
//   // });
//   // await newMedia.save();
//   // return newMedia;
// };

// module.exports = { addMedia };
