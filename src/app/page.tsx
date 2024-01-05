import { SettingTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Label from '@/components/Form/Label'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

export default function Home() {
  return (
    <>
      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg border border-violet-500 bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label.Root htmlFor="firstName">
              <Label.Heading>Name</Label.Heading>
            </Label.Root>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Gabriel" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Martins" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="email">
              <Label.Heading>Email address</Label.Heading>
            </Label.Root>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                defaultValue="gabrielsilva3553@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="photo">
              <Label.Heading>Your photo</Label.Heading>
              <Label.Description>
                This will be displayed on your profile.
              </Label.Description>
            </Label.Root>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="role">
              <Label.Heading>Role</Label.Heading>
            </Label.Root>

            <Input.Root>
              <Input.Control id="role" defaultValue="Front-end developer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="country">
              <Label.Heading>Country</Label.Heading>
            </Label.Root>

            <Select placeholder="Select a country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="us" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="timezone">
              <Label.Heading>Timezone</Label.Heading>
            </Label.Root>

            <Select placeholder="Select a timezone...">
              <SelectItem
                text="Pacific Standard Time (UTC-08:00)"
                value="utc8"
              />
              <SelectItem text="America São Paulo (UTC-03:00)" value="utc3" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="bio">
              <Label.Heading>Bio</Label.Heading>
              <Label.Description>Write a short intruduction.</Label.Description>
            </Label.Root>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal" value="normal" defaultChecked />
                  <SelectItem text="Markdown" value="md" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label.Root htmlFor="projects">
              <Label.Heading>Portfolio projects</Label.Heading>
              <Label.Description>
                Share a few snippets of your work.
              </Label.Description>
            </Label.Root>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-lg border border-violet-500 bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
