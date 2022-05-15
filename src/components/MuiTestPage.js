import { Stack, Typography, Button, Box, styled } from '@mui/material';

// This is a component that has a bunch of mui components in it for me to test with. Put it in the App.js file to see them.
export const MuiTestPage = () => {
  return (
    <div>
      <div>
        <Typography>
          ---------------------------------------------------- Headings
          ----------------------------------------------------
        </Typography>

        <Typography variant='h1'>Hello this is an h1</Typography>
        <Typography variant='h2'>Hello this is an h2</Typography>
        <Typography variant='h3'>Hello this is an h3</Typography>
        <Typography variant='h4'>Hello this is an h4</Typography>
        <Typography variant='h5'>Hello this is an h5</Typography>
        <Typography variant='h6'>Hello this is an h6</Typography>

        <Typography>
          ---------------------------------------------------- Sub Titles
          ----------------------------------------------------
        </Typography>

        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>

        <Typography>
          ---------------------------------------------------- Bodies
          ----------------------------------------------------
        </Typography>

        {/*// Note that body1 is the default variant, you wouldn't need to define it like this one*/}
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda atque beatae blanditiis cum
          deleniti deserunt dicta enim esse est eveniet facere hic impedit inventore ipsa, iure iusto laborum libero
          magnam minima minus, modi nam nostrum nulla perspiciatis quae quia ratione saepe sapiente sequi sint sunt
          suscipit tempora tenetur totam ut voluptates! Adipisci, aperiam architecto assumenda commodi cumque cupiditate
          eligendi eos est ex in incidunt iusto mollitia, natus odit omnis perspiciatis quas reprehenderit soluta ullam
          unde ut vel veritatis voluptas voluptates voluptatum! Aperiam dolor magnam nam placeat ullam.
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad aspernatur assumenda atque aut
          consequatur cupiditate dolorem dolorum eos error excepturi facilis, id in ipsa itaque, iusto nemo nostrum
          nulla odit officia quam ratione tempore temporibus tenetur velit veritatis voluptatem? Adipisci, alias
          aliquid, aut cum, ea eos facilis id laborum laudantium libero magni nemo nesciunt nisi nobis nostrum nulla
          odit placeat possimus praesentium quas quo quod recusandae repudiandae similique tenetur unde velit voluptate.
          Amet animi, autem culpa fuga impedit in iusto molestiae nihil omnis sint sunt totam?
        </Typography>
      </div>

      <Stack spacing={4}>
        <Typography>
          ---------------------------------------------------- Different Button Variants
          ----------------------------------------------------
        </Typography>
        <Stack spacing={2} direction='row'>
          {/*Typically used when you don't need to call as much attention to the button*/}
          <Button variant='text'>Text</Button>
          {/*Typically used for primary buttons*/}
          <Button variant='contained'>Contained</Button>
          {/*Typically used for secondary buttons like "cancel" or "go back" */}
          <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Typography>
          ---------------------------------------------------- Different colors of the contained variant
          ----------------------------------------------------
        </Typography>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>
            Contained - Primary
          </Button>
          <Button variant='contained' color='secondary'>
            Contained - Secondary
          </Button>
          <Button variant='contained' color='error'>
            Contained - Error
          </Button>
          <Button variant='contained' color='warning'>
            Contained - Warning
          </Button>
          <Button variant='contained' color='info'>
            Contained - Info
          </Button>
          <Button variant='contained' color='success'>
            Contained - Success
          </Button>
        </Stack>
        <Typography>
          ---------------------------------------------------- Different colors of the text variant
          ----------------------------------------------------
        </Typography>
        <Stack spacing={2} direction='row'>
          <Button variant='text' color='primary'>
            Text - Primary
          </Button>
          <Button variant='text' color='secondary'>
            Text - Secondary
          </Button>
          <Button variant='text' color='error'>
            Text - Error
          </Button>
          <Button variant='text' color='warning'>
            Text - Warning
          </Button>
          <Button variant='text' color='info'>
            Text - Info
          </Button>
          <Button variant='text' color='success'>
            Text - Success
          </Button>
        </Stack>
        <Typography>
          ---------------------------------------------------- Different colors of the outline variant
          ----------------------------------------------------
        </Typography>
        <Stack spacing={2} direction='row'>
          <Button variant='outlined' color='primary'>
            Outlined - Primary
          </Button>
          <Button variant='outlined' color='secondary'>
            Outlined - Secondary
          </Button>
          <Button variant='outlined' color='error'>
            Outlined - Error
          </Button>
          <Button variant='outlined' color='warning'>
            Outlined - Warning
          </Button>
          <Button variant='outlined' color='info'>
            Outlined - Info
          </Button>
          <Button variant='outlined' color='success'>
            Outlined - Success
          </Button>
        </Stack>
        <Typography>
          ---------------------------------------------------- Light, Main, and Dark versions colors of the contained
          variant ----------------------------------------------------
        </Typography>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' sx={{ bgcolor: 'secondary.light' }}>
            Contained - Secondary Light
          </Button>
          <Button variant='contained' sx={{ bgcolor: 'secondary.main' }}>
            Contained - Secondary Main
          </Button>
          <Button variant='contained' sx={{ bgcolor: 'secondary.dark' }}>
            Contained - Secondary Dark
          </Button>
        </Stack>
        <Typography>
          ---------------------------------------------------- Different sizes of the contained variant
          ----------------------------------------------------
        </Typography>
        <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' size='small'>
            Small Contained
          </Button>
          <Button variant='contained' size='medium'>
            Medium Contained
          </Button>
          <Button variant='contained' size='large'>
            Large Contained
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
