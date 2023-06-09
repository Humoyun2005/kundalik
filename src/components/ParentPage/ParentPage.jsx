/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo.png";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { FiLogOut, FiUser } from "react-icons/fi";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StudentData } from "../../vaqtincha";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const ParentPage = ({ handleLogout }) => {
  const location = useLocation();
  const { name, surname } = location.state;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const Item = styled(Paper)(() => ({
    background: "#ECF8F9",
    borderRadius: 5,
    padding: "7px 15px",
    boxShadow: "none",
  }));

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ margin: "0 auto", maxWidth: "1280px", padding: "0 20px" }}>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          maxWidth: "1280px",
          margin: "0 auto",
          mb: 2,
        }}
      >
        <Box
          sx={{
            my: 2.5,
            width: { xs: "90px", sm: "100px", md: "120px", lg: "140px" },
          }}
        >
          <Link to="/" onClick={handleLogout}>
            <img style={{ width: "100%" }} src={logo} alt="" />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
          }}
        >
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Tooltip title="Hisob sozlamalari">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, borderRadius: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{
                      color: "#000",
                      width: 225,
                      height: 38,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      justifyContent: "center",
                      bgcolor: "#ECF8F977",
                    }}
                  >
                    <FiUser />
                    <Typography sx={{ marginLeft: "5px" }}>
                      {name} {surname}
                    </Typography>
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "#fff",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link to="/" onClick={handleLogout}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FiLogOut fontSize="small" />
                  </ListItemIcon>

                  <Typography color="#000">Chiqish</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </>
        </Box>
      </Box>
      <Box
        mb={2}
        sx={{
          bgcolor: "#ECF8F9",
          padding: "20px 40px",
          borderRadius: 3,
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography fontWeight={600} fontSize={20} mb={1.5}>
            Nurillo Tojiakhmedov
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            Teacher: Boburmiro Rosulov
          </Typography>
          <Typography fontSize={15}>Subject: Web Dasturlash</Typography>
          <Typography fontSize={15} mt={0.5}>
            Level: Back-End
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              bgcolor: "#fff",
              padding: "15px 10px",
            }}
          >
            <Typography fontWeight={400} fontSize={14}>
              Weekly
            </Typography>
            <Typography fos fontWeight={500} fontSize={32}>
              18
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              bgcolor: "#fff",
              padding: "15px 10px",
            }}
          >
            <Typography fontWeight={400} fontSize={14}>
              Monthly
            </Typography>
            <Typography fos fontWeight={500} fontSize={32}>
              43
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              bgcolor: "#fff",
              padding: "15px 10px",
            }}
          >
            <Typography fontWeight={400} fontSize={14}>
              Levelly
            </Typography>
            <Typography fos fontWeight={500} fontSize={32}>
              57
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {StudentData?.map((e) => (
            <Grid item xs={12} md={4} sm={6} key={e.day}>
              <Item>
                <Typography mb={1}>{e.day}</Typography>
                <hr />
                {e.lesson ? (
                  <TableContainer
                    mb={2}
                    component={Paper}
                    sx={{ boxShadow: "none", bgcolor: "#ECF8F9" }}
                  >
                    <Table
                      width={"full"}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Ball</TableCell>
                          <TableCell>Izoh</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {e.grades.map((ball) => (
                          <TableRow
                            key={ball}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ textAlign: "center", width: 2 }}
                            >
                              <Typography
                                sx={{
                                  bgcolor:
                                    ball.grade >= 4
                                      ? "green"
                                      : ball.grade >= 3
                                      ? "yellow"
                                      : ball.grade >= 0
                                      ? "red"
                                      : "inherit",
                                  fontWeight: 800,
                                }}
                              >
                                {ball.grade}
                              </Typography>
                            </TableCell>
                            <TableCell>{ball.comment}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography>Dars mavjud emas</Typography>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
