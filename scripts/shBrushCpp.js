/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
 typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
    var my_constant = 'PURGE_TXABORT SEEK_END SEEK_SET PURGE_RXABORT PURGE_TXCLEAR PURGE_RXCLEAR NOPARITY ONESTOPBIT DTR_CONTROL_ENABLE RTS_CONTROL_ENABLE LowPagePriority DO_DIRECT_IO CBR_9600 MAXDWORD IO_NO_INCREMENT STATUS_SUCCESS GENERIC_READ FB_ACTIVATE_NOW IRP_MN_REMOVE_DEVICE GENERIC_WRITE IRP_MJ_PNP METHOD_BUFFERED SDL_DOUBLEBUF IRP_MJ_DEVICE_CONTROL _THIS STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT FBIOPAN_DISPLAY METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ OBJ_CASE_INSENSITIVE KEY_ALL_ACCESS STATUS_CANCELLED STATUS_BUFFER_TOO_SMALL STATUS_BUFFER_OVERFLOW FILE_FLAG_OVERLAPPED NonPagedPool KeyValuePartialInformation DISPATCH_LEVEL KernelMode OPEN_EXISTING IN OUT FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ EXCEPTION_EXECUTE_HANDLER MAXIMUM_ALLOWED STATUS_DEVICE_NOT_READY FILE_SHARE_WRITE FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING RTL_REGISTRY_ABSOLUTE RTL_QUERY_REGISTRY_DIRECT REG_DWORD REG_NONE';
    var my_keyword =  'continue __asm__ __volatile__ struct return abs volatile switch break __cdecl static __init __exit addr and stdcall array Nil as asm begin cardinal __init_refok case class comp const constructor currency destructor div do double downto else end except exports extended false file finalization finally for function goto if implementation in inherited initialization interface is label library mod not object of on or packed private procedure program property protected public published raise record WINAPI typedef __stdcall repeat set shl shr then threadvar to true try type unit until uses val var varirnt while with word write writeln xor __try __except extern';
    var my_type = 'bool DCB short FILE PHANDLE HANDLE _KDPC _DEVICE_OBJECT PLIST_ENTRY char_device_struct file_operations PIrp PUCHAR Handle VOID _IO_CSQ void Integer int timeval tm Pointer PFILE_OBJECT SDL_VideoDevice SDL_Surface OBJECT_ATTRIBUTES WCHAR KEY_VALUE_PARTIAL_INFORMATION PKEY_VALUE_PARTIAL_INFORMATION PCWSTR UCHAR PWSTR PDriverObject SDL_Rect PUnicodeString Sint32 Uint32 dword TUnicodeString Uint8 ULONG PIoStackLocation PChar PDeviceObject char byte boolean dd db PIRP _IRP IO_STACK_LOCATION PIO_STACK_LOCATION NTSTATUS PKTIMER BOOLEAN LONG PKDPC KDPC PDRIVER_OBJECT KTIMER PUNICODE_STRING ACCESS_MASK POBJECT_ATTRIBUTES PIO_STATUS_BLOCK LPCWSTR LPWSTR wchar_t NT_OPEN_FILE HMODULE NtOpenFileStruct IO_STATUS_BLOCK PDEVICE_OBJECT DEVICE_OBJECT BYTE unsigned long CHAR word LIST_ENTRY byte UNICODE_STRING PVOID DRIVER_OBJECT RTL_QUERY_REGISTRY_TABLE PWCHAR DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';
    var my_function = 'fwrite SetCommTimeouts memcmp sscanf fprintf exit fopen register_chrdev fseek ftell _kbhit _getch fclose assert fread fputc new delete __register_chrdev_region MODULE_LICENSE SetCommState MODULE_AUTHOR SetCommTimeoutsgMODULE_DESCRIPTION PurgeComm GetLastError printk module_init module_exit do_gettimeofday time_to_tm SDL_Flip SDL_UpdateRect FlipHWSurface FB_FlipHWSurface FB_IsSurfaceBusy FB_WaitBusySurfaces wait_vbl ioctl IoAttachDeviceToDeviceStack SDL_SetError IoSkipCurrentIrpStackLocation SDL_UpdateRects FB_DirectUpdate SDL_SetVideoMode FB_FreeHWSurfaces FB_InitHWSurfaces malloc SDL_malloc IoCallDriver strncpy printf sizeof IoDetachDevice sprintf_s IoCompleteRequest CONTAINING_RECORD NT_SUCCESS UNREFERENCED_PARAMETER StrCopy KeAcquireSpinLock RtlUnicodeStringPrintf InitializeObjectAttributes ZwOpenKey KeReleaseSpinLockFromDpcLevel ZwQueryValueKey KeReleaseSpinLock WriteLn IoStartTimer ExAllocatePoolWithTag IoStopTimer Format FillChar _DriverEntry ExFreePool RtlCopyMemory IoInitializeTimer memset memcpy crt_printf DeviceIoControl KeSetTimerEx wcslen LoadLibrary KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer wsprintf sprintf KeInitializeTimer GetProcAddress IsListEmpty GetExceptionCode KeRaiseIrql KeLowerIrql RemoveHeadList InsertHeadList RtlZeroMemory RtlQueryRegistryValues InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

    this.regexList = [
      {regex: /^ *#.*/gm, css: 'my_preprocessor'},
      {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.singleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.multiLineCComments, css:'my_comment'},
      {regex: SyntaxHighlighter.regexLib.singleLineCComments, css:'my_comment'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['cpp', 'c'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
