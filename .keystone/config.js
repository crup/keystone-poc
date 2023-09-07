"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core7 = require("@keystone-6/core");

// src/schemas/user.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var User = (0, import_core.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access.allowAll,
  // this is the fields for our User list
  fields: {
    // by adding isRequired, we enforce that every User should have a name
    //   if no name is provided, an error will be displayed
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - this may or may not be a good idea for your project
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true } }),
    // we can use this field to see what Posts this User has authored
    //   more on that in the Post list below
    posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
    createdAt: (0, import_fields.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    })
  }
});

// src/schemas/post.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var Post = (0, import_core2.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access2.allowAll,
  // this is the fields for our Post list
  fields: {
    title: (0, import_fields2.text)({ validation: { isRequired: true } }),
    // the document field can be used for making rich editable content
    //   you can find out more at https://keystonejs.com/docs/guides/document-fields
    content: (0, import_fields_document.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    // with this field, you can set a User as the author for a Post
    author: (0, import_fields2.relationship)({
      // we could have used 'User', but then the relationship would only be 1-way
      ref: "User.posts",
      // this is some customisations for changing how this will look in the AdminUI
      ui: {
        displayMode: "cards",
        cardFields: ["name", "email"],
        inlineEdit: { fields: ["name", "email"] },
        linkToItem: true,
        inlineConnect: true
      },
      // a Post can only have one author
      //   this is the default, but we show it here for verbosity
      many: false
    }),
    // with this field, you can add some Tags to Posts
    tags: (0, import_fields2.relationship)({
      // we could have used 'Tag', but then the relationship would only be 1-way
      ref: "Tag.posts",
      // a Post can have many Tags, not just one
      many: true,
      // this is some customisations for changing how this will look in the AdminUI
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ["name"] }
      }
    })
  }
});

// src/schemas/tag.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var Tag = (0, import_core3.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access3.allowAll,
  // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
  ui: {
    isHidden: true
  },
  // this is the fields for our Tag list
  fields: {
    name: (0, import_fields3.text)(),
    // this can be helpful to find out all the Posts associated with a Tag
    posts: (0, import_fields3.relationship)({ ref: "Post.tags", many: true })
  }
});

// src/schemas/make.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var Make = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    name: (0, import_fields4.text)({ validation: { isRequired: true } }),
    model: (0, import_fields4.relationship)({
      ref: "Model.make",
      many: true,
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    }),
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" },
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    })
  }
});

// src/schemas/model.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var Model = (0, import_core5.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access5.allowAll,
  // this is the fields for our User list
  fields: {
    make: (0, import_fields5.relationship)({
      ref: "Make.model",
      many: false
    }),
    name: (0, import_fields5.text)({ validation: { isRequired: true } }),
    variant: (0, import_fields5.relationship)({
      ref: "Variant.model",
      many: true
    }),
    createdAt: (0, import_fields5.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// src/schemas/variant.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var Variant = (0, import_core6.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access6.allowAll,
  // this is the fields for our User list
  fields: {
    make: (0, import_fields6.relationship)({
      ref: "Make",
      many: false
    }),
    model: (0, import_fields6.relationship)({
      ref: "Model.variant",
      many: false
    }),
    name: (0, import_fields6.text)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields6.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    })
  }
});

// src/schemas/index.ts
var schemas_default = {
  User,
  Post,
  Tag,
  Make,
  Model,
  Variant
};

// src/auth/index.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core7.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists: schemas_default,
    session
  })
);
//# sourceMappingURL=config.js.map
