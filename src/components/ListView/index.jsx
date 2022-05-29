import { HelpOutline } from '@mui/icons-material'
import { Button, Divider, Grid, List, ListItem, Paper, Popover, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, {useState } from 'react'
import Text from '../Text'

const itemPaper = {
  display: 'flex',
  margin: 16,
  padding: 16,
  minWidth: 440
}

const ListView = ({
  data,
}) => {

  const [anchorEl, setAnchorEl] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const handlePopoverOpen = (event, ind) => {
    setCurrentIndex(ind)
    setAnchorEl(event.currentTarget)
  }
  const handlePopoverClose = () => {
    setTimeout(() => {
      setAnchorEl(null)
    }, 1500 )
  }

  const open = Boolean(anchorEl)

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <List>
          {data?.map((el, ind) => {
            return (
              <Paper key= {`ppr${ind}`} style={itemPaper}>
                <ListItem alignItems='flex-start'>
                  <Grid container>
                    <Grid item xs={12} style={{display: 'flex', flexDirection: 'row'}}>
                      <Box
                      style ={{width: 180}}
                      component="img"
                      sx= {{
                        height: 50,
                        width: 140,
                        maxHeight: { xs: 233, md: 167 },
                        minWidth: { xs: 140, md: 140 },
                      }}
                      src={el?.ImagePath}
                      />
                      <Divider orientation= "vertical" style= {{width: 15}}/>
                      <Box style= {{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Box style= {{display:'flex', flexDirection:'column', marginLeft: '15px'}}>
                          <Text size={13} weight={700} style={{margin: 0}}>{el?.ProductDesc}</Text>
                          <Box>
                          <Text size={13} style={{margin: 0}} >{el?.FirmName}</Text>
                          {el?.popoverContent?.length > 0 &&
                            <>
                              <HelpOutline 
                                style= {{
                                  marginLeft: 5, 
                                  height: 15, 
                                  width: 15, 
                                  color: 'rgb(25, 118, 210)'
                                }}
                                key={`icon${el?.Cash}`}
                                onMouseOver={(e) => handlePopoverOpen(e, ind)}
                                onMouseOut={(e) => handlePopoverClose(e, ind)}
                              />
                                {ind === currentIndex &&
                                  <Popover
                                  id="mouse-over-popover"
                                  open={open}
                                  anchorEl={anchorEl}
                                  anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                  }}
                                  transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                  }}
                                  onClose={handlePopoverClose}
                                  disableRestoreFocus
                                >
                                  <Typography sx={{ p: 1 }} style={{maxWidth: 250}}>{el?.popoverContent[0]?.Description}</Typography>
                                </Popover>
                                }
                            </>
                          }
                          </Box>
                        </Box>
                        {el?.QuotaInfo?.HasDiscount ?
                        (
                          <Box style={{display:'flex', flexDirection: 'column'}}>
                            <Text size={12} style={{margin: 0, textDecorationLine: 'line-through'}}>Peşin {el?.Cash} TL</Text>
                            <Text style={{margin: 0}} weight={600}>{el?.QuotaInfo?.PremiumWithDiscount} TL</Text>
                          </Box>
                        )
                        :
                        (
                          <Box style={{display:'flex', flexDirection: 'column'}}>
                            <Text style={{margin: 0}} weight={600} >{el?.Cash} TL</Text>
                          </Box>
                        )
                        }
                      </Box>
                    </Grid>
                    <Grid item xs={12} style= {{display:'flex', justifyContent: 'flex-end'}}>
                        {el?.SaleClosed ? 
                        (
                          <Button
                          variant="outlined"
                          color= "primary"
                          style= {{position: "relative", height: 50, width: 145, color: 'rgb(25, 118, 210)'}}
                          >
                            <Text style= {{position: "absolute", top: 0}} size={10}>Telefonda Satın Al</Text>
                          </Button>
                        )
                        :
                        (
                          <Button
                          variant="contained"
                          color= "primary"
                          style= {{width: 145}}
                          >
                            Satın Al
                          </Button>
                        )
                        }
                    </Grid>
                  </Grid>
                </ListItem>
              </Paper>
            )
          })}
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ListView