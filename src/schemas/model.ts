import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
    text,
    relationship,
    password,
    timestamp,
  } from '@keystone-6/core/fields';

export const Model = list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      make: relationship({
        ref: 'Make.model',
        many: false,
        ui: {
            hideCreate: true,
            linkToItem: false
        }
      }),
      name: text({ validation: { isRequired: true } }),
      variant: relationship({
        ref: 'Variant.model',
        many: true,
        ui: {
            createView: {
                fieldMode: "hidden"
            },
            itemView: {
                fieldMode: "hidden"
            }
        }
      }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
        ui: {
              createView: {
                  fieldMode: "hidden"
              },
              itemView: {
                fieldMode: "read"
              }
          },
      }),
    },
  })