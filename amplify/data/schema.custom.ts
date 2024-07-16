import { a } from "@aws-amplify/data-schema";
import { schema as generatedSqlSchema } from './schema.sql'; 

export const schema = generatedSqlSchema
  .renameModels(() => [
    ["client", "Client"],
    ["user", "User"],
    ["userphone", "UserPhone"],
    ["useraddress", "UserAddress"],
    ["emergencycontact", "EmergencyContact"]
  ])
  .setRelationships((models) => [
    models.User.relationships({
      phones: a.hasMany("UserPhone", "userid"),
      addresses: a.hasMany("UserAddress", "userid"),
      contacts: a.hasMany("EmergencyContact", "userid")
    }),
    models.UserPhone.relationships({
      user: a.belongsTo("User", "userid"),
    }),
    models.UserAddress.relationships({
      user: a.belongsTo("User", "userid"),
    }),
    models.EmergencyContact.relationships({
      user: a.belongsTo("User", "userid"),
    }),
  ])
  .setAuthorization((models) => [
    models.Client.authorization((allow) => [
      // allow.publicApiKey().to(['read']),
      allow.guest().to(['read']),
      allow.groupDefinedIn('id').to(['read','update']),
      allow.group('PerchAdmin')
    ]),
    models.User.authorization((allow) => [
      allow.groupDefinedIn('clientid'),
      allow.group('PerchAdmin')
    ]),
    models.UserPhone.authorization((allow) => [
      allow.groupDefinedIn('clientid'),
      allow.group('PerchAdmin')
    ]),
    models.UserAddress.authorization((allow) => [
      allow.groupDefinedIn('clientid'),
      allow.group('PerchAdmin')
    ]),
    models.EmergencyContact.authorization((allow) => [
      allow.groupDefinedIn('clientid'),
      allow.group('PerchAdmin')
    ])
  ])
  .addToSchema({

    getClientBySlug: a.query()
      .arguments({
        slug: a.string().required()
      })
      .returns(a.ref("Client").array())
      .handler(a.handler.inlineSql(
          `SELECT * FROM public.client WHERE slug = :slug;`
      ))
      .authorization(allow => [
        allow.guest(),
        // allow.publicApiKey(),
        allow.authenticated()
      ]),

    searchUsers: a.query()
      .arguments({
        lookup: a.string().required()
      })
      .returns(a.ref("User").array())
      .handler(a.handler.inlineSql(
        `SELECT * FROM public.searchuser(:lookup);`
    )).authorization(allow => allow.authenticated()),

  })
;
