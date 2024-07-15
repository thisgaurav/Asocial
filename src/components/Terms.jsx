import React, { useState } from 'react'
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function Terms() {
  const [open, setOpen] = useState(true);
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5`
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className='flex'>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-[600px] max-h-[800px]  rounded-[40px] p-5">
          <CardBody className="font-['Poppins'] flex overflow-auto no-scrollbar flex-col gap-3 relative">
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>User Safety and Conduct</h2>
            <p className='font-medium pt-4'>The app should emphasize respectful and appropriate conduct among users.
              Users should refrain from sharing explicit or harmful content.
              The app should provide mechanisms for reporting and blocking inappropriate behavior.
              Age Restriction and Verification</p>
            <p className='font-medium pt-2'>The app should strictly enforce an age restriction, allowing only users who are 18 years or older to use the platform.
              It should implement a robust age verification process to prevent minors from accessing the app.
            </p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Privacy Protection
            </h2>
            <p className='font-medium pt-4'>The app should prioritize the protection of users' personal information and digital identities.
              It should offer strong privacy settings, allowing users to control who can view their profiles and personal details.
            </p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Content Moderation
            </h2>
            <p className='font-medium pt-4'>The app should implement stringent content moderation to ensure that all user-generated content complies with community guidelines and standards.
              Measures should be in place to filter out inappropriate or offensive content.
            </p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Terms of Service and Acceptable Use
            </h2>
            <p className='font-medium pt-4'>
              Users should agree to the terms of service and acceptable use policy before accessing the app.
              The terms should outline the permissible and prohibited activities on the platform.
            </p>
          </CardBody>
          <CardFooter className="pt-0 mt-3">
            <Button type="submit" variant="gradient" onClick={handleOpen} className={`text-white sticky bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Agree</Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}
