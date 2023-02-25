/**
 * An indication of one action that may be performed.
 * NOTE: instances of this class are not persisted in storage. Rather they are persisted in code
 * for efficiency purposes.
 */
export interface Permission {
	/**
	 * The name of the role that the permission is against.
	 */
	roleName: string

	/**
	 * The name of the class that the permission is against.
	 */
	className: string

	/**
	 * The name of the member that the permission is against. This may be a property name or a method name and
	 * it may also be an asterisk in which case it relates to all members.
	 */
	memberName: string

	/**
	 * If true, this is permission is being given to the role. If false, it is being taken away and takes
	 * precedence over additions.
	 */
	isGranted: boolean

	/**
	 * For classes, it grants the ability to create new instances.
	 */
	create: boolean

	/**
	 * For classes or properties, it grants the ability to view/retrieve the information.
	 */
	read: boolean

	/**
	 * For classes or properties, it grants the ability to alter existing contents.
	 */
	update: boolean

	/**
	 * For classes, it grants the ability to remove existing instances.
	 */
	delete: boolean

	/**
	 * For methods, it grants the ability to invoke the method.
	 */
	execute: boolean
}
