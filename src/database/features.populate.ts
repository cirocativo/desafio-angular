import { IFeature } from 'src/interfaces';

export const features: IFeature[] = [
  {
    id: '3299dffa-b120-42ef-a755-ea8495d2aaa2',
    name: 'See My Applications',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/applications',
        description: 'List applications of my company',
      },
      {
        method: 'GET',
        endpoint: '/admin/applications/:id',
        description: 'See an application',
      },
    ],
  },
  {
    id: 'e24ccbff-77fa-463e-bcb4-6bc482429b11',
    name: 'See App Version',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/appversions',
        description: 'List App versions',
      },
      {
        method: 'GET',
        endpoint: '/appversions/:id',
        description: 'Get one version',
      },
      {
        method: 'GET',
        endpoint: '/appversions/latest',
        description: 'Get latest App version',
      },
      {
        method: 'GET',
        endpoint: '/appversions/stable',
        description: 'Get stable App version',
      },
    ],
  },
  {
    id: '2e5591a3-26ea-4c57-959e-7010ce7f4081',
    name: 'Manage App Versions',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/appversions',
        description: 'Include a new app version',
      },
      {
        method: 'PATCH',
        endpoint: '/appversions/:id',
        description: 'Change a app version by id',
      },
      {
        method: 'PATCH',
        endpoint: '/appversions/:id/:release',
        description: 'Change a app version by build',
      },
    ],
  },
  {
    id: '7de8d3ad-ccb3-4b2c-896d-102da6c8fefa',
    name: 'Manage Companies',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/akiry/companies',
        description: 'List companies',
      },
      {
        method: 'GET',
        endpoint: '/akiry/companies/:id',
        description: 'Get one company',
      },
      {
        method: 'PATCH',
        endpoint: '/akiry/companies/:id',
        description: 'Patch one company',
      },
      {
        method: 'POST',
        endpoint: '/akiry/companies',
        description: 'Create a company',
      },
      {
        method: 'DELETE',
        endpoint: '/akiry/companies/:id',
        description: 'Delete one company',
      },
    ],
  },
  {
    id: 'fb15e5e2-d8f0-4eb2-bbd5-d1ba522746fd',
    name: 'Manage Content Types',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/contentTypes',
        description: 'List Content Type',
      },
      {
        method: 'GET',
        endpoint: '/contentTypes/:id',
        description: 'Get one Content Type',
      },
      {
        method: 'PATCH',
        endpoint: '/contentTypes/:id',
        description: 'Patch one Content Type',
      },
      {
        method: 'POST',
        endpoint: '/contentTypes',
        description: 'Create a Content Type',
      },
      {
        method: 'DELETE',
        endpoint: '/contentTypes/:id',
        description: 'Delete one Content Type',
      },
    ],
  },
  {
    id: '19fbce67-8de2-4a39-aadb-f47cbce23860',
    name: 'Send Feedback',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/feedbacks',
        description: 'Send a feedback',
      },
    ],
  },
  {
    id: 'fc690620-b60f-4855-bddf-f21a843f85a5',
    name: 'Manage Feedbacks',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/feedbacks',
        description: 'List feedbacks',
      },
      {
        method: 'GET',
        endpoint: '/admin/feedbacks/:id',
        description: 'Get one feedback',
      },
      {
        method: 'GET',
        endpoint: '/admin/feedbacks/status/:status',
        description: 'Filter feedbacks',
      },
      {
        method: 'GET',
        endpoint: '/admin/feedbacks/search',
        description: 'Edit one feedback status',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/feedbacks/:id',
        description: 'Edit one feedback status',
      },
    ],
  },
  {
    id: '7e46b0c9-494d-498d-a814-d4ed9cfded07',
    name: 'List Flows',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/flows',
        description: 'List all flows',
      },
      {
        method: 'GET',
        endpoint: '/flows/:id',
        description: 'Get one flow',
      },
      {
        method: 'GET',
        endpoint: '/me/flows',
        description: 'List all my flows',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:id',
        description: 'Get one flow mine',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:id/userFlows',
        description: 'List all UsersFlow of Flow',
      },
    ],
  },
  {
    id: 'e6094211-e6e6-4d0e-a1fd-2700a82512e8',
    name: 'Manage Flow',
    description: '',
    services: [
      // Flows
      {
        method: 'POST',
        endpoint: '/me/flows',
        description: 'Create a flow',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:id',
        description: 'Update one flow mine',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:id',
        description: 'Delete one flow mine',
      },
      // UserFlows
      {
        method: 'POST',
        endpoint: '/me/flows/:id/userFlows',
        description: 'Create a UserFlow of Flow',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:id/userFlows/:userFlowId',
        description: 'Update a UserFlow of Flow',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:id/userFlows/:userFlowId',
        description: 'Delete one UserFlow of Flow',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:id/image',
        description: 'Upload flow image',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:id/image',
        description: 'Delete Flow image',
      },
      // FlowProfile
      {
        method: 'POST',
        endpoint: '/admin/flows/:flowId/flowProfiles',
        description: 'Create an FlowProfile',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/flows/:flowId/flowProfiles/:id',
        description: 'Update one FlowProfile',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/flows/:flowId/flowProfiles/:id',
        description: 'Delete one FlowProfile',
      },
      // SetupFlows
      {
        method: 'POST',
        endpoint: '/admin/flows/:flowId/setupFlows',
        description: 'Create an SetupFlow',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/flows/:flowId/setupFlows/:id',
        description: 'Update one SetupFlow',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/flows/:flowId/setupFlows/:id',
        description: 'Delete one SetupFlow',
      },
    ],
  },
  {
    id: '171050ee-2740-423f-89bc-81ef99bc032f',
    name: 'Accept Invite',
    description: '',
    services: [
      {
        method: 'PATCH',
        endpoint: '/users/invites/accept',
        description: 'Accept invite',
      },
    ],
  },
  {
    id: '279430a8-3060-4714-9008-f42f2e3ccd3b',
    name: 'Manage My Invites',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/me/invites',
        description: 'Get my invites',
      },
      {
        method: 'GET',
        endpoint: '/me/invites/search',
        description: 'Search in my own invites',
      },
      {
        method: 'POST',
        endpoint: '/me/invites',
        description: 'Send a invite',
      },
      {
        method: 'DELETE',
        endpoint: '/me/invites/:invitationCode',
        description: 'Delete a invite',
      },
    ],
  },
  {
    id: '822d9ea0-f108-4c13-a275-4c7764322e13',
    name: 'Manage Invites',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/admin/invites',
        description: 'Get all invites',
      },
      {
        method: 'GET',
        endpoint: '/admin/invites/search',
        description: 'search all invites',
      },
      {
        method: 'GET',
        endpoint: '/admin/invites',
        description: 'Send all invites',
      },
    ],
  },
  {
    id: 'c6347500-24c4-4283-aaef-8484289f0258',
    name: 'Manage Live',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/lives',
        description: 'List Lives',
      },
      {
        method: 'GET',
        endpoint: '/lives/:id',
        description: 'Get one Lives',
      },
      {
        method: 'PATCH',
        endpoint: '/lives/:id',
        description: 'Patch one Lives',
      },
      {
        method: 'POST',
        endpoint: '/lives',
        description: 'Create a Lives',
      },
      {
        method: 'DELETE',
        endpoint: '/lives/:id',
        description: 'Delete one Lives',
      },
    ],
  },
  {
    id: '19446a1d-71c2-4568-841c-da5798f0a1d9',
    name: 'Create Profile',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/me',
        description: 'Create my profile',
      },
    ],
  },
  {
    id: 'e76ac7ed-0017-46d1-8955-958f8df15e57',
    name: 'Update My Profile',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/me',
        description: 'Show my profile',
      },
      {
        method: 'PATCH',
        endpoint: '/me',
        description: 'Update my profile',
      },
      {
        method: 'PATCH',
        endpoint: '/me/image',
        description: 'Update my image profile',
      },
      {
        method: 'DELETE',
        endpoint: '/me/image',
        description: 'Update my image profile',
      },
      {
        method: 'PATCH',
        endpoint: '/me/password',
        description: 'Change my password',
      },
      {
        method: 'DELETE',
        endpoint: '/me',
        description: 'Delete my account',
      },
    ],
  },
  {
    id: '2c5d2ac6-31c0-437f-983f-c82e07789c56',
    name: 'Manage Media',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/medias',
        description: 'List Media',
      },
      {
        method: 'GET',
        endpoint: '/medias/:id',
        description: 'Get one Media',
      },
      {
        method: 'POST',
        endpoint: '/me/medias',
        description: 'Create a Media',
      },
      // {
      // 	method: 'PATCH',
      // 	endpoint: '/me/medias/:id',
      // 	description: 'Patch one Media',
      // },
      // {
      // 	method: 'DELETE',
      // 	endpoint: '/me/medias/:id',
      // 	description: 'Delete one Media',
      // },
      {
        method: 'DELETE',
        endpoint: '/me/medias/:id/cancel',
        description: 'Cancel media job by id',
      },
      {
        method: 'PATCH',
        endpoint: '/me/medias/:id/restart',
        description: 'Restart media job by id',
      },
      {
        method: 'PATCH',
        endpoint: '/me/medias/:id/resume',
        description: 'Resume media job by id',
      },
    ],
  },
  {
    id: 'f34cd6e8-d116-4fb3-a2e8-8c76faba384c',
    name: 'Transcoder Webhook',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/medias/webhook',
        description: 'Updates media processing status',
      },
    ],
  },
  {
    id: '5fe46211-ea64-49c0-b022-60b9e1939e76',
    name: 'Subscribe on Newsletter',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/newsletters',
        description: 'Subscribe on the newsletter',
      },
    ],
  },
  {
    id: '456f5390-364e-4bc3-8e9e-7f4525ece588',
    name: 'Manage Subscribed Users on Newsletter',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/newsletters',
        description: 'List subscribed users to send info',
      },
      {
        method: 'GET',
        endpoint: '/admin/newsletters/:id',
        description: 'See one subscribed user to send info',
      },
    ],
  },
  {
    id: '7c799568-afb6-4986-95a9-f7bf649f3952',
    name: 'Make a Payment',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/me/payments',
        description: 'Make a payment',
      },
    ],
  },
  {
    id: '57de5dbd-810c-44f6-9c55-ae99c7b67b73',
    name: 'Manage My Subscriptions',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/me/subscription',
        description: 'Subscribe on a plan',
      },
      {
        method: 'GET',
        endpoint: '/me/subscription',
        description: 'Get my subscription',
      },
      {
        method: 'PATCH',
        endpoint: '/me/subscription/delete',
        description: 'Unsubscripe from a plan',
      },
    ],
  },
  {
    id: 'febfb083-b178-4662-a06b-915d1e6a289b',
    name: 'Manage Schedule',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/schedule',
        description: 'List schedules',
      },
      {
        method: 'GET',
        endpoint: '/admin/schedule/:id',
        description: 'Get one schedule',
      },
      {
        method: 'GET',
        endpoint: '/admin/schedule/search',
        description: 'Search schedules',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/schedule/:id',
        description: 'Patch one schedule',
      },
      {
        method: 'POST',
        endpoint: '/admin/schedule',
        description: 'Create a schedule',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/schedule/:id',
        description: 'Delete one schedule',
      },
    ],
  },
  {
    id: '126aadf0-aa66-447f-a988-0c972403b1aa',
    name: 'Manage Schema',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/schemas',
        description: 'List Schema',
      },
      {
        method: 'GET',
        endpoint: '/schemas/:id',
        description: 'Get one Schema',
      },
      {
        method: 'POST',
        endpoint: '/schemas',
        description: 'Create a Schema',
      },
      {
        method: 'PATCH',
        endpoint: '/schemas/:id',
        description: 'Patch one Schema',
      },
      {
        method: 'DELETE',
        endpoint: '/schemas/:id',
        description: 'Delete one Schema',
      },
    ],
  },
  {
    id: '0e283803-660f-4a94-a595-ad87de3bb0a3',
    name: 'List Screening Sessions',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/screeningSession',
        description: 'lIST screeningSession',
      },
      {
        method: 'GET',
        endpoint: '/screeningSession/:id',
        description: 'Get one screeningSession',
      },
    ],
  },
  {
    id: '47f760fc-a0ff-4da0-abfe-c812accafb68',
    name: 'Manage My Screening Sessions',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/me/screeningSession',
        description: 'Get my screeningSession',
      },
      {
        method: 'GET',
        endpoint: '/me/screeningSession/:id',
        description: 'Get my screeningSession by id',
      },
      {
        method: 'POST',
        endpoint: '/me/screeningSession',
        description: 'Add a screeningSession',
      },
      {
        method: 'PATCH',
        endpoint: '/me/screeningSession/:id',
        description: 'Patch a screeningSession',
      },
      {
        method: 'DELETE',
        endpoint: '/me/screeningSession/:id',
        description: 'Delete a screeningSession',
      },
    ],
  },
  {
    id: '85370d73-6d75-4723-a0e2-dab88d85b54f',
    name: 'Manage All Screening Sessions',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/screeningSession',
        description: 'Get all screeningSession',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/screeningSession/:id',
        description: 'Delete a screeningSession',
      },
    ],
  },
  {
    id: '41de272e-cfd7-47cf-bddc-2d8c084a26e9',
    name: 'List Site Info',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/siteInfo',
        description: 'List siteInfo last version',
      },
      {
        method: 'GET',
        endpoint: '/siteInfo/:info',
        description: 'List siteInfo last version',
      },
    ],
  },
  {
    id: 'ec43384a-3746-4be8-b38c-028c0eb5ae44',
    name: 'Manage Site Info',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/siteInfo',
        description: 'List siteInfos',
      },
      {
        method: 'GET',
        endpoint: '/admin/siteInfo/:id',
        description: 'Get one siteInfo',
      },
      {
        method: 'GET',
        endpoint: '/admin/siteInfo/search',
        description: 'Search siteInfos',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/siteInfo/:id',
        description: 'Patch one siteInfo',
      },
      {
        method: 'POST',
        endpoint: '/admin/siteInfo',
        description: 'Create a siteInfo',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/siteInfo/:id',
        description: 'Delete one siteInfo',
      },
    ],
  },
  {
    id: '5a15b0d8-2be1-4678-81bd-6ba414432dc2',
    name: 'List Stories',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/stories',
        description: 'List Stories',
      },
      {
        method: 'GET',
        endpoint: '/stories/:id',
        description: 'Get one Stories',
      },
      {
        method: 'GET',
        endpoint: '/stories/search',
        description: 'Search Stories',
      },
      {
        method: 'GET',
        endpoint: '/flows/:flowId/stories',
        description: 'Get all Stories of Flow',
      },
      {
        method: 'GET',
        endpoint: '/flows/:flowId/stories/:id',
        description: 'Get one Story of Flow',
      },
    ],
  },
  {
    id: '5f02d1a2-1951-49df-9e68-dd56a7a9991f',
    name: 'Manage my stories',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/me/stories',
        description: 'List my Stories',
      },
      {
        method: 'GET',
        endpoint: '/me/stories/:id',
        description: 'Get my Story by id',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/stories',
        description: 'Get my Stories of one Flow',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/stories/:id',
        description: 'Get my Stories of one Flow',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/stories/:id/status',
        description: 'Get one Story of Flow status',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/stories/search',
        description: 'Search my Stories of one Flow',
      },
      {
        method: 'POST',
        endpoint: '/me/flows/:flowId/stories',
        description: 'Create a Stories',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:flowId/stories/:id',
        description: 'Patch one Story',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:flowId/stories/:id',
        description: 'Delete one Story',
      },
    ],
  },
  {
    id: '33f7e2d2-1375-4a66-868c-573623aff635',
    name: 'Watch Story',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/stories/:id/url',
        description: 'Get manifest url to watch a story',
      },
    ],
  },
  {
    id: '23c2cf5e-2121-428c-b86a-e9c40f214a6f',
    name: 'List Videos',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/videos',
        description: 'List videos',
      },
      {
        method: 'GET',
        endpoint: '/videos/:id',
        description: 'Get video by id',
      },
      {
        method: 'GET',
        endpoint: '/videos/search',
        description: 'Search videos',
      },
      {
        method: 'GET',
        endpoint: '/medias/:mediaId/thumbnails',
        description: 'Get thumbnails of a video',
      },
      {
        method: 'GET',
        endpoint: '/flows/:flowId/videos',
        description: 'List videos of a flow',
      },
      {
        method: 'GET',
        endpoint: '/flows/:flowId/videos/:id',
        description: 'Get video of a flow by id',
      },
      {
        method: 'GET',
        endpoint: '/videos/analytics/amount-videos',
        description: 'Get amount videos',
      },
    ],
  },
  {
    id: '8b8bf2b8-b9d8-44c0-9822-2391b2f14f04',
    name: 'Manage My Videos',
    description: '',
    services: [
      // Manage Videos Instances
      {
        method: 'GET',
        endpoint: '/me/videos',
        description: 'Get my videos',
      },
      {
        method: 'GET',
        endpoint: '/me/videos/:id',
        description: 'Get my video',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/videos',
        description: 'Get my videos',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/videos/:id',
        description: 'Get my video',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/videos/:id/status',
        description: 'Get a video status',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/videos/:id/videoStats',
        description: 'Get a video stats',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/videos/search',
        description: 'search videos in one flow',
      },
      {
        method: 'POST',
        endpoint: '/me/flows/:flowId/videos',
        description: 'Post videos',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:flowId/videos/:id',
        description: 'Edit a video',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:flowId/videos/:id',
        description: 'Delete a video',
      },
      // Manage Uploads Instances
      {
        method: 'GET',
        endpoint: '/me/uploads',
        description: 'Get my uploads',
      },
      {
        method: 'GET',
        endpoint: '/me/uploads/:id',
        description: 'Get upload by id',
      },
      {
        method: 'POST',
        endpoint: '/me/uploads',
        description: 'Post a upload',
      },
      {
        method: 'POST',
        endpoint: '/me/uploads/:id/segments',
        description: 'Segment a video',
      },
      {
        method: 'POST',
        endpoint: '/me/uploads/:id/concat',
        description: 'Concat a video',
      },
      {
        method: 'PATCH',
        endpoint: '/me/uploads/:id',
        description: 'Patch upload by id',
      },
      {
        method: 'DELETE',
        endpoint: '/me/uploads/:id',
        description: 'Delete upload by id',
      },
      // Manage Thumbnails Instances
      {
        method: 'POST',
        endpoint: '/me/flows/:flowId/medias/:mediaId/thumbnails',
        description: 'Upload my video thumbnail',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:flowId/medias/:mediaId/thumbnails/:id',
        description: 'Delete my video thumbnail',
      },
    ],
  },
  // {
  // 	id: '6979a25e-eba9-4e3e-8d4c-3c9a34fa315f',
  // 	name: 'Manage All Videos',
  // 	description: '',
  // 	services: [
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videos',
  // 			description: 'List all videos of own company',
  // 		},
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videos/search',
  // 			description: 'Search videos of own company',
  // 		},
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videos/:id/status',
  // 			description: 'See video status',
  // 		},
  // 		{
  // 			method: 'PATCH',
  // 			endpoint: '/admin/videos/:id',
  // 			description: 'Get one video',
  // 		},

  // 		{
  // 			method: 'DELETE',
  // 			endpoint: '/admin/videos/:id',
  // 			description: 'Delete one video',
  // 		},
  // 		{
  // 			method: 'POST',
  // 			endpoint: '/admin/flows/:flowId/medias/:mediaId/thumbnails',
  // 			description: 'Upload thumbnail of one vod/storie/live/etc',
  // 		},
  // 		{
  // 			method: 'DELETE',
  // 			endpoint: '/admin/flows/:flowId/medias/:mediaId/thumbnails/:id',
  // 			description: 'Delete a video thumbnail',
  // 		},
  // 	],
  // },
  {
    id: 'ca33f98c-31f4-4d40-9513-b30fe7d93b82',
    name: 'Login',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/token/login',
        description: 'Login',
      },
      {
        method: 'POST',
        endpoint: '/resetPassword',
        description: 'Reset password',
      },
      {
        method: 'PATCH',
        endpoint: '/updatePassword',
        description: 'Update password',
      },
    ],
  },
  {
    id: 'b2ffbd3e-f44e-41c5-a94f-8402a6d0c780',
    name: 'Logout',
    description: '',
    services: [
      {
        method: 'DELETE',
        endpoint: '/token',
        description: 'Logout',
      },
    ],
  },
  {
    id: 'c9d3afd6-b943-4268-8ed7-034928a844e1',
    name: 'Manage User Flow',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/userFlows',
        description: 'List User Flow',
      },
      {
        method: 'GET',
        endpoint: '/userFlows/:id',
        description: 'Get one User Flow',
      },
      {
        method: 'GET',
        endpoint: '/me/userFlows',
        description: 'Get all User Flow of User',
      },
      {
        method: 'POST',
        endpoint: '/userFlows',
        description: 'Create a User Flow',
      },
      {
        method: 'PATCH',
        endpoint: '/userFlows/:id',
        description: 'Patch one User Flow',
      },
      {
        method: 'DELETE',
        endpoint: '/userFlows/:id',
        description: 'Delete one User Flow',
      },
    ],
  },
  {
    id: 'ae7b3840-00d9-4e27-90e0-081ba6939696',
    name: 'Confirm Email',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/users/:id/confirm',
        description: 'Confirm Email',
      },
      {
        method: 'GET',
        endpoint: '/users/:id/sendConfirmationEmail',
        description: 'send Confirmation Email',
      },
    ],
  },
  {
    id: '018cbaaa-a54b-47d2-8f7b-6fc975a44aa8',
    name: 'List Others Users',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/users',
        description: 'List users',
      },
      {
        method: 'GET',
        endpoint: '/users/:id',
        description: `Get one user's public info`,
      },
      {
        method: 'GET',
        endpoint: '/users/company/:id/count',
        description: `Get all users by company`,
      },
    ],
  },
  {
    id: '122a7431-b2b0-47ba-be30-57bc9699f21b',
    name: 'Manage Users',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/admin/users',
        description: 'Get users list',
      },
      {
        method: 'GET',
        endpoint: '/admin/users/search',
        description: 'Search users',
      },
      {
        method: 'POST',
        endpoint: '/admin/users',
        description: 'Create a new user',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/users/:id',
        description: 'Edit a user info',
      },
      {
        method: 'GET',
        endpoint: '/admin/users/inactives',
        description: 'List deleted users',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/users/:id/image',
        description: 'Edit a user info',
      },
      // {
      // 	method: 'DELETE',
      // 	endpoint: '/admin/users/:id',
      // 	description: 'Delete a user',
      // },
    ],
  },
  {
    id: '1a06328f-cd5b-497c-8c76-09b88f02fe36',
    name: 'List Video Options',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/videoOptions',
        description: 'Get videoOptions list',
      },
    ],
  },
  // {
  // 	id: 'f8a3effc-3507-4a95-aaf7-fb4ce628b3be',
  // 	name: 'Manage Video Options',
  // 	description: '',
  // 	services: [
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videoOptions',
  // 			description: 'Get videoOptions list',
  // 		},
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videoOptions/:id',
  // 			description: 'Get a videoOptions by id',
  // 		},
  // 		{
  // 			method: 'GET',
  // 			endpoint: '/admin/videoOptions/search',
  // 			description: 'Search videoOptions',
  // 		},
  // 		{
  // 			method: 'POST',
  // 			endpoint: '/admin/videoOptions',
  // 			description: 'Create a new videoOptions',
  // 		},
  // 		{
  // 			method: 'PATCH',
  // 			endpoint: '/admin/videoOptions/:id',
  // 			description: 'Edit a videoOptions',
  // 		},
  // 		{
  // 			method: 'DELETE',
  // 			endpoint: '/admin/videoOptions/:id',
  // 			description: 'Delete a videoOptions',
  // 		},
  // 	],
  // },
  {
    id: '52b3ae79-191e-4692-800b-b0fe3b2d2b36',
    name: 'Watch Video',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/videos/:id/url',
        description: 'Get manifest url to watch a video',
      },
    ],
  },
  {
    id: 'b7eb7a0c-623e-4ffd-bed8-2ee892b0bec9',
    name: 'Manage Organizer',
    description: '',
    services: [
      // Organizers
      {
        method: 'POST',
        endpoint: '/me/flows/:flowId/organizers',
        description: 'Create an organizer',
      },
      {
        method: 'PATCH',
        endpoint: '/me/flows/:flowId/organizers/:id',
        description: 'Update one organizer mine',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:flowId/organizers/:id',
        description: 'Delete one organizer mine',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/organizers',
        description: 'List all organizer',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/organizers/:id',
        description: 'Get one organizer by id',
      },
      // MediaOrganizers
      {
        method: 'PUT',
        endpoint: '/me/flows/:flowId/organizers/:id/medias',
        description: 'Create a MediaOrganizer of Organizer',
      },
      {
        method: 'DELETE',
        endpoint: '/me/flows/:flowId/organizers/:id/medias/:mediaId',
        description: 'Delete one MediaOrganizer of Organizer',
      },
      {
        method: 'GET',
        endpoint: '/me/flows/:flowId/organizers/:id/medias',
        description: 'List all medias of Organizer',
      },
    ],
  },
  {
    id: '5b2e300a-3755-41fb-8eb8-5bd3e2eb5546',
    name: 'Manage AdCampaign',
    description: '',
    services: [
      // AdCampaign
      {
        method: 'POST',
        endpoint: '/admin/adCampaigns',
        description: 'Create an adCampaign',
      },
      {
        method: 'PATCH',
        endpoint: '/admin/adCampaigns/:id',
        description: 'Update one adCampaign',
      },
      {
        method: 'DELETE',
        endpoint: '/admin/adCampaigns/:id',
        description: 'Delete one adCampaign',
      },
      {
        method: 'GET',
        endpoint: '/admin/adCampaigns',
        description: 'List all adCampaign',
      },
      {
        method: 'GET',
        endpoint: '/admin/adCampaigns/:id',
        description: 'GEt one adCampaign',
      },
    ],
  },
  {
    id: '0c25c98c-8124-4b7b-854c-ec41ae59706a',
    name: 'URL AdCampaign',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/adCampaigns/url',
        description: 'Get one random adCampaign',
      },
    ],
  },
  {
    id: 'cea303b9-96c6-48cd-b07c-852491aee805',
    name: 'Plans',
    description: '',
    services: [
      {
        method: 'GET',
        endpoint: '/plans',
        description: 'Get all plans',
      },
    ],
  },
  {
    id: '474ca18b-c2d9-46d6-9ecf-bdce4c8cfebe',
    name: 'Create a SmartAds API token',
    description: '',
    services: [
      {
        method: 'POST',
        endpoint: '/apiSmartAds/token',
        description: 'Create a SmartAds API token route',
      },
    ],
  },
  {
    id: 'aaeafb81-9e92-42e2-84cc-f64b926a9aaa',
    name: 'List Roles',
    description: 'Get list of roles',
    services: [
      {
        method: 'GET',
        endpoint: '/roles',
        description: 'Get list of roles',
      },
    ],
  },
  {
    id: 'f9683a7c-915e-4459-8d08-3085d7b3766e',
    name: 'Manage Video Stats',
    description: 'Get info about video stats',
    services: [
      {
        method: 'GET',
        endpoint: '/videoStats',
        description: 'Get top videos by general view stats',
      },
    ],
  },
];
