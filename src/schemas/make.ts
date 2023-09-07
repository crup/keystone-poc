import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  timestamp,
} from "@keystone-6/core/fields";

export const Make = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    model: relationship({
            ref: "Model.make",
            many: true,
            ui: {
                createView: {
                    fieldMode: "hidden"
                },
                hideCreate: true
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
});
