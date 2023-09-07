// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { User } from "./user";
import { Post } from "./post";
import { Tag } from "./tag"
import { Make } from "./make";
import { Model } from "./model";
import { Variant } from "./variant";
// import type { Lists } from '.keystone/types';

export default {
  User,
  Post,
  Tag,
  Make,
  Model,
  Variant
};
