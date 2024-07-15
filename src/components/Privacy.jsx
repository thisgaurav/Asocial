import React, {useState} from 'react'
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

export default function Privacy() {
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
        <Card className="mx-auto w-[600px] rounded-[40px] p-5">
          <CardBody className="font-['Poppins'] flex flex-col gap-3 relative">
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Introduction</h2>
            <p className='font-medium pt-4'>We at [Video Calling App] are committed to protecting the privacy and security of our users. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information when you use our video calling app. By using our app, you consent to the terms of this Privacy Policy.</p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Compliance with Laws</h2>
            <p className='font-medium pt-4'>We comply with all applicable privacy laws and regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Changes to the Privacy Policy</h2>
            <p className='font-medium pt-4'>We reserve the right to update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <h2 className='text-3xl text-[#D67AEA] font-semibold'>Contact Us</h2>
            <p className='font-medium pt-4'>If you have any questions or concerns about our Privacy Policy or our practices, please contact us at [contact information].By using our video calling app, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" onClick={handleOpen} className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Done</Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}
