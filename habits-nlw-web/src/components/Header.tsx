import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react';

import { NewHabitForm } from './NewHabitForm';

import logoImage from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoImage} alt="Habits logo" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="py-4 px-6 border-2 border-violet-500 rounded-lg font-semibold flex items-center gap-3 transition-colors hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/70 fixed inset-0" />

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-500">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl font-extrabold leading-tight text-white">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
