import React, { useState, useCallback, type ReactNode } from "react";
import { Snackbar, Alert, type AlertColor } from "@mui/material";
import { SnackbarContext, type SnackbarContextType } from "./SnackbarContext";

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<{
    message: string;
    severity: AlertColor;
  } | null>(null);

  const showSnackbar = useCallback<SnackbarContextType["showSnackbar"]>((message, severity) => {
    setSnackbarMessage({ message, severity });
    setOpen(true);
  }, []);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {snackbarMessage ? (
          <Alert onClose={handleClose} severity={snackbarMessage.severity} sx={{ width: "100%" }}>
            {snackbarMessage.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
