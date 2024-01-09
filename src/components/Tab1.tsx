import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Label from '@/components/Form/Label'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'

export function Tab1() {
  return (
    <motion.div layoutId="activeTabContent" className="mt-6 flex flex-col">
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal info
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="firstName">
            <Label.Heading>Name</Label.Heading>
          </Label.Root>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Gabriel" />
            </Input.Root>

            <div className="flex flex-col gap-3 lg:block">
              <Label.Root htmlFor="lastName" variant="mobile">
                <Label.Heading>Last name</Label.Heading>
              </Label.Root>

              <Input.Root>
                <Input.Control id="lastName" defaultValue="Martins" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="photo">
            <Label.Heading>Your photo</Label.Heading>
            <Label.Description>
              This will be displayed on your profile.
            </Label.Description>
          </Label.Root>

          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="role">
            <Label.Heading>Role</Label.Heading>
          </Label.Root>

          <Input.Root>
            <Input.Control id="role" defaultValue="Front-end developer" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="country">
            <Label.Heading>Country</Label.Heading>
          </Label.Root>

          <Select placeholder="Select a country...">
            <SelectItem text="Brazil" value="br" />
            <SelectItem text="United States" value="us" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="timezone">
            <Label.Heading>Timezone</Label.Heading>
          </Label.Root>

          <Select placeholder="Select a timezone...">
            <SelectItem text="Pacific Standard Time (UTC-08:00)" value="utc8" />
            <SelectItem text="America São Paulo (UTC-03:00)" value="utc3" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <Label.Root htmlFor="bio">
            <Label.Heading>Bio</Label.Heading>
            <Label.Description>Write a short intruduction.</Label.Description>
          </Label.Root>

          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem text="Normal" value="normal" defaultChecked />
                <SelectItem text="Markdown" value="md" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="button">Save</Button>
        </div>
      </form>
    </motion.div>
  )
}
