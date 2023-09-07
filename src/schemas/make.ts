import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  password,
  timestamp,
} from "@keystone-6/core/fields";

export const Make = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    model: relationship({
            ref: "Model.make",
            many: true,
            ui: {
                createView: {
                    fieldMode: "hidden"
                }
            },
        }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
      ui: {
            createView: {
                fieldMode: "hidden"
            }
        },
    }),
  },
});
