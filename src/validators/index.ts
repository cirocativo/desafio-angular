import { AbstractControl } from '@angular/forms';

export function startsWithSlashValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = control.value;
  if (value && !value.startsWith('/')) {
    return { startsWithSlash: true };
  }

  return null;
}

export function endsWithValidCharactersValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = control.value;
  if (value && (value.endsWith('/') || value.endsWith(':'))) {
    return { endsWithValidCharacters: true };
  }

  return null;
}

export function hasValidCharactersValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = control.value;
  const regex = /^[a-zA-Z0-9\/ :_-]*$/g;

  if (!regex.test(value)) {
    return { hasValidCharacters: true };
  }
  return null;
}

export function hasNoSpaceValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = control.value;
  if (value.indexOf(' ') !== -1) return { hasNoSpace: true };

  return null;
}
