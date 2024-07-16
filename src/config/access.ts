import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { CLIENT_ADMIN, CLIENT_TRAINER, CLIENT_SALES } from '@/config';

const defineAbilityFor = ({ 
  role 
}: { 
  role: string 
}) => {
  // const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
  const { build } = new AbilityBuilder(createMongoAbility);

  if (role === CLIENT_ADMIN) {
    // do something
  } else if (role === CLIENT_TRAINER) {
    // do something
  } else if (role === CLIENT_SALES) {
    // do something
  }
  // if (user.isAdmin) {
  //   can('manage', 'all'); // read-write access to everything
  // } else {
  //   can('read', 'all'); // read-only access to everything
  // }

  return build({
    /* eslint-disable-next-line no-underscore-dangle */
    detectSubjectType: (object) => object.__typename,
  });
};

export default defineAbilityFor;
