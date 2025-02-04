import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import { Checkbox } from '@nextui-org/checkbox';

const ContactPage = () => {
  return (
    <div>

<Button color="primary">
      Button
    </Button>

    <div className="flex flex-wrap gap-4 items-center">
      <Button color="default">
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>  
      <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
      <Button color="danger">
        Danger
      </Button>  
    </div>
    <div className="flex gap-4">
      <Checkbox defaultSelected color="default">Default</Checkbox>
      <Checkbox defaultSelected color="primary">Primary</Checkbox>
      <Checkbox defaultSelected color="secondary">Secondary</Checkbox>
      <Checkbox defaultSelected color="success">Success</Checkbox>
      <Checkbox defaultSelected color="warning">Warning</Checkbox>
      <Checkbox defaultSelected color="danger">Danger</Checkbox>
    </div> 

    </div>
  )
}

export default ContactPage