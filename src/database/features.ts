import { IFeature } from 'src/interfaces';

export const features: IFeature[] = [
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
    ],
  },
];
