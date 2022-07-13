import { Permissions } from '../../../../app/models/server/raw';
import { guestPermissions } from '../lib/guestPermissions';

export const resetEnterprisePermissions = async function (): Promise<void> {
	await Permissions.updateMany(
		{
			_id: { $nin: guestPermissions },
			roles: 'guest',
		},
		{ $pull: { roles: 'guest' } },
	);
};
