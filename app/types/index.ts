import { User } from '@prisma/client';

export type CurrentUser = Omit<
  User,
  'emailVerified' | 'createdAt' | 'updatedAt'
> & { emailVerified: string | null; createdAt: string; updatedAt: string };
