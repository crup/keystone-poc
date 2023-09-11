import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
    text,
    relationship,
    password,
    timestamp,
  } from '@keystone-6/core/fields';
import { stars } from '../fields/2-star-field';

export const Variant = list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      make: relationship({
        ref: 'Make',
        many: false,
      }),
      model: relationship({
        ref: 'Model.variant',
        many: false
      }),
      name: text({ validation: { isRequired: true } }),
      rating: stars({
        ui: {
          description: 'A star rating, with a scale of 5',
        },
      }),
      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: 'now' },
      }),
    }
  })