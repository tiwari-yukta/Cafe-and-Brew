import { useState, useRef, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Button } from '@/components/ui';
import { AuthModal } from '../AuthModal';
import { useAuth } from '@/hooks';
import {
  UserButton,
  UserAvatarPlaceholder,
  Dropdown,
  DropdownItem,
  DropdownEmail,
  DropdownMenuWrapper,
  LogoutButton,
} from './styled';

export const UserMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (!user) {
    return (
      <>
        <Button
          variant="primary"
          buttonSize="sm"
          onClick={() => setAuthModalOpen(true)}
        >
          Sign Up
        </Button>
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          defaultMode="signup"
        />
      </>
    );
  }

  const displayName = user.displayName || user.email?.split('@')[0] || 'User';
  const initials = displayName
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenuWrapper ref={dropdownRef}>
      <UserButton type="button" onClick={() => setIsOpen((o) => !o)} aria-expanded={isOpen}>
        <UserAvatarPlaceholder>
          {initials}
        </UserAvatarPlaceholder>
      </UserButton>
      {isOpen && (
        <Dropdown>
          <DropdownItem as="div">
            <strong>{displayName}</strong>
            {user.email && <DropdownEmail>{user.email}</DropdownEmail>}
          </DropdownItem>
          <DropdownItem as={LogoutButton} onClick={() => logout()}>
            <FaSignOutAlt />
            Sign Out
          </DropdownItem>
        </Dropdown>
      )}
    </DropdownMenuWrapper>
  );
};
